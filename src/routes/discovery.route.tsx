import DiscoveryComponent from "../components/DiscoveryComponent";

export default function Discovery() {
	return (
		<>
			<header className="bg-white shadow">
				<div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl font-bold text-gray-900">TAXII Discovery</h1>
				</div>
			</header>
			<main>
				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					{/* Replace with your content */}
					<DiscoveryComponent />
					{/* /End replace */}
				</div>
			</main>
		</>
	)
}