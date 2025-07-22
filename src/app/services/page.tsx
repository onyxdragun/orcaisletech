import React from "react";
import { SiteHeader, SiteFooter } from "../components/SiteLayout";

const services = [
	{
		name: "PC Diagnostics & Repair",
		description: "Troubleshooting, hardware replacement, virus removal, and more.",
		price: "$60/hr",
	},
	{
		name: "Tech Support & Setup",
		description: "Software installs, device setup, WiFi/network help, and training.",
		price: "$50/hr",
	},
	{
		name: "Data Recovery",
		description: "Recover lost files, backup solutions, and data migration.",
		price: "From $80",
	},
	{
		name: "Custom Builds & Upgrades",
		description: "PC builds, upgrades, and performance tuning.",
		price: "Quote",
	},
];

export default function ServicesPage() {
	return (
		<>
			<SiteHeader />
			<div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans flex flex-col">
				<main className="flex flex-col items-center py-12 px-4">
					<h1 className="text-4xl font-bold mb-8 text-white">Our Services & Pricing</h1>
					{/* Desktop Table */}
					<div className="hidden md:block w-full max-w-3xl bg-gray-900 shadow-xl border border-gray-700 rounded-xl overflow-hidden">
						<table className="w-full">
							<thead>
								<tr className="bg-gray-800 text-gray-300">
									<th className="py-4 px-6 text-left">Service</th>
									<th className="py-4 px-6 text-left">Description</th>
									<th className="py-4 px-6 text-left">Price</th>
								</tr>
							</thead>
							<tbody>
								{services.map((service) => (
									<tr key={service.name} className="bg-gray-900">
										<td className="py-4 px-6 font-semibold text-white">{service.name}</td>
										<td className="py-4 px-6 text-gray-300">{service.description}</td>
										<td className="py-4 px-6 text-white">{service.price}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					{/* Mobile Cards */}
					<div className="md:hidden w-full flex flex-col gap-6">
						{services.map((service) => (
							<div key={service.name} className="bg-gray-900 rounded-xl shadow-xl border border-gray-700 p-6 flex flex-col gap-2">
								<h2 className="text-xl font-bold text-white mb-1">{service.name}</h2>
								<p className="text-gray-300 text-sm mb-2">{service.description}</p>
								<span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold self-end">{service.price}</span>
							</div>
						))}
					</div>
					<div className="mt-12 flex justify-center">
						<a href="/contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-gray-700 hover:border-blue-400 group cursor-pointer w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14 text-white mb-2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" /></svg>
							<h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400">Ready to Get Help?</h2>
							<p className="text-gray-300 text-center mb-2 flex-1">Contact us for a quote, booking, or any tech questions. We&apos;re here to help!</p>
							<span className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold mt-2">Contact Form</span>
						</a>
					</div>
				</main>
				<SiteFooter />
			</div>
		</>
	);
}
