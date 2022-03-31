import Link from "next/link";
import Button from "../components/buttons";

export default function NotFound(params) {
    return(
        <div className=" min-h-screen flex items-center justify-center">
            <div className="text-center px-8">
                <h1 className=" text-4xl lg:text-6xl">404</h1>
                <h3 className=" text-lg lg:text-4xl mb-8 mt-8">Page not found</h3>
                <p className="mb-8">Please check the URL in the adress bar and try again.</p>
                <Link href="/">
                    <Button variant="primary">
                        Go back home
                    </Button>
                </Link>
            </div>

        </div>
    )
};
