import ServiceFour from "../components/service/ServiceFour";
import ServiceOne from "../components/service/ServiceOne";
import ServiceThree from "../components/service/ServiceThree";
import ServiceTwo from "../components/service/ServiceTwo";

const Service = () => {
    return (
        <div className='d-flex justify-content-center'>
            <h1>Service Page</h1>
            <ServiceOne/>
            <ServiceTwo/>
            <ServiceThree/>
            <ServiceFour/>
        </div>
    );
};

export default Service;