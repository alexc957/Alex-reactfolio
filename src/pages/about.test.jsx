import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import About from "./about";

beforeAll(() => {
	window.scrollTo = jest.fn();
});

describe("About", () => {
	it("renders a Download CV button linking to the resume PDF", () => {
		render(
			<MemoryRouter>
				<About />
			</MemoryRouter>
		);

		const downloadLink = screen.getByRole("link", {
			name: /download cv/i,
		});

		expect(downloadLink).toBeInTheDocument();
		expect(downloadLink).toHaveAttribute(
			"href",
			"/Alexander_Coronel_Resume.pdf"
		);
		expect(downloadLink).toHaveAttribute("download");
	});
});
