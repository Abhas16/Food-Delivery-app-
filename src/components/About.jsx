import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    Welcome to Classic Kitchen, your go-to destination for convenient and delicious food delivery! We're on a mission to simplify the way you enjoy your favorite meals, whether you're craving comfort food classics, exploring global cuisines, or seeking healthier options.

                 

Classic Kitchen was founded with one simple goal in mind: to connect food lovers with the best local restaurants in their area. We understand the joy that comes from savoring a mouthwatering dish prepared with care and attention to quality ingredients. That's why we've partnered with a curated selection of top-rated restaurants to bring their culinary creations right to your doorstep.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}
