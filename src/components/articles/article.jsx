import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./style/article.scss";

const Article = (props) => {
	const { date, title, description, link, image } = props;

	const isExternal = link && link.startsWith("http");

	const linkProps = isExternal
		? {
				href: link,
				target: "_blank",
				rel: "noopener noreferrer",
		  }
		: { to: link };

	const LinkWrapper = isExternal ? "a" : Link;

	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">{date}</div>
				</div>

				<LinkWrapper {...linkProps}>
					<div className="article-right-side">
						<div className="article-title">{title}</div>
						<div className="article-description">{description}</div>
						{image && (
							<div className="article-image">
								<img src={image} alt={title} />
							</div>
						)}
						<div className="article-link">
							{isExternal ? "Read More " : "Read Article "}
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={isExternal ? faExternalLinkAlt : faChevronRight}
							/>
						</div>
					</div>
				</LinkWrapper>
			</div>
		</React.Fragment>
	);
};

export default Article;
