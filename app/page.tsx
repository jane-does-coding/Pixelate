import Banner from "@/components/Banner";
import Carousel from "@/components/Carousel";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Info from "@/components/Info";
import Insights from "@/components/Insights";
import MarqueeComponent from "@/components/MarqueeComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
	return (
		<div className="">
			<Navbar />
			<Banner />
			<Featured />
			<Carousel />
			<Info />
			{/* 			<MarqueeComponent />
			 */}{" "}
			<Insights />
			<Footer />
		</div>
	);
}
