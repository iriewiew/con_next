import { useRouter } from 'next/router'
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-custom">
            <div className="container-lg">
                <Link
                    href={{
                        pathname: `/`,
                    }}
                    as={`/`}
                >
                    <a className="navbar-brand">Nextjs demo contentful</a>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item">
                            <Link
                                href={{
                                    pathname: `/`,
                                }}
                                as={`/`}
                            >
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href={{
                                    pathname: `/contents`,
                                }}
                                as={`/contents`}
                            >
                                <a className="nav-link" >Contents <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href={{
                                    pathname: `/contact`,
                                }}
                                as={`/contact`}
                            >
                                <a className="nav-link" >Contact Us <span className="sr-only">(current)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    );
};
