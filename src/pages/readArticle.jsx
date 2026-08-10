import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import internalArticles from "../data/internalArticles";

import "./styles/readArticle.scss";

const ReadArticle = () => {
	const navigate = useNavigate();
	const { slug } = useParams();

	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);

	const articleMeta = internalArticles.find((a) => a.slug === slug);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (!articleMeta) {
			navigate("/404");
			return;
		}

		fetch(`/articles/${slug}.md`)
			.then((res) => {
				if (!res.ok) throw new Error("Article not found");
				return res.text();
			})
			.then((text) => {
				setContent(text);
				setLoading(false);
			})
			.catch(() => {
				navigate("/404");
			});
	}, [slug, articleMeta, navigate]);

	if (!articleMeta) {
		return null;
	}

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${articleMeta.title} | ${INFO.main.title}`}</title>
				<meta name="description" content={articleMeta.description} />
				<meta name="keywords" content={articleMeta.keywords.join(", ")} />
			</Helmet>

			<div className="page-content">
				<NavBar />

				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="read-article-container">
						<div className="read-article-back">
							<img
								src={process.env.PUBLIC_URL + "/back-button.png"}
								alt="back"
								className="read-article-back-button"
								onClick={() => navigate(-1)}
							/>
						</div>

						<div className="read-article-wrapper">
							<div className="read-article-date-container">
								<div className="read-article-date">
									{articleMeta.date}
								</div>
							</div>

							<div className="title read-article-title">
								{articleMeta.title}
							</div>

							<div className="read-article-body">
								{loading ? (
									<p>Loading...</p>
								) : (
									<ReactMarkdown remarkPlugins={[remarkGfm]}>
										{content}
									</ReactMarkdown>
								)}
							</div>
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default ReadArticle;
