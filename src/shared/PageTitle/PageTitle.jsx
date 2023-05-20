import { Helmet } from "react-helmet";



const PageTitle = ({title}) => {
    return (
        <Helmet>
            <title>Minimal Toys | {title}</title>
        </Helmet>
    );
};

export default PageTitle;