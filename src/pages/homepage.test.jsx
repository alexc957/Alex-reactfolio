import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Homepage from "./homepage";

beforeAll(() => {
	window.scrollTo = jest.fn();
});

describe("Homepage", () => {
	it("renders a Download CV button linking to the resume PDF", () => {
		render(
			<MemoryRouter>
				<Homepage />
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
