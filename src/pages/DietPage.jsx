
import Header from "../components/Header";
import HeroSection1 from "../components/HeroSection1";
import Bmr from "../components/Bmr";
import MealPlans from "../components/MealPlan";
import NoMealSection from "../components/NoMealSection";
import HowWeWork from "../components/HowWeWork";
import WhyChooseUs from "../components/WhyChooseUs";
import BlogSection from "../components/BlogSection";
import CustomerSay from "../components/CustomerSay";
import EnrollmentProcess from "../components/EnrolmentProcess";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection1 />
      <Bmr />
      <MealPlans />
      <NoMealSection />
      <HowWeWork />
      <WhyChooseUs />
      <CustomerSay />
      <BlogSection />
      <EnrollmentProcess />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
