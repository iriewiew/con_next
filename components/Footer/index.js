import { useRouter } from "next/router";
import Link from "../Link";
import { routes } from "../../data/routes";

const Footer = () => {
  const path = routes;
  const router = useRouter();
  return (
    <footer className="main-footer mt-4">
      <div className="bg-gray-100 text-dark-700 py-6">
          <div className="container">
              <div className="row">
                  <div className="service-column col-lg-4">
                      {/* <img src="" alt=""/> */}
                      <div className="service-text">
                          <h6 className="text-uppercase">
                            Free shipping &amp; return
                          </h6>
                          <p className="text-muted font-weight-light text-sm mb-0">Free Shipping over $300</p>
                      </div>
                  </div>
                  <div className="service-column col-lg-4">
                      {/* <img src="" alt=""/> */}
                      <div className="service-text">
                          <h6 className="text-uppercase">Money back guarantee</h6>
                          <p className="text-muted font-weight-light text-sm mb-0">30 Days Money Back Guarantee</p>
                      </div>
                  </div>
                  <div className="service-column col-lg-4">
                      {/* <img src="" alt=""/> */}
                      <div className="service-text">
                          <h6 className="text-uppercase">020-800-456-747</h6>
                          <p className="text-muted font-weight-light text-sm mb-0">24/7 Available Support</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="py-6 bg-gray-300 text-muted">
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 mb-5 mb-lg-0">
                      <div className="font-weight-bold text-uppercase text-lg text-dark mb-3">Sell<span className="text-primary">.</span></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                      <ul className="list-inline">
                          <li className="list-inline-item">
                              <a className="text-muted text-hover-primary" href="#" target="_blank" title="twitter"><i className="fab fa-twitter"></i></a>
                          </li>
                          <li className="list-inline-item">
                              <a className="text-muted text-hover-primary" href="#" target="_blank" title="facebook"><i className="fab fa-facebook"></i></a>
                          </li>
                          <li className="list-inline-item">
                              <a className="text-muted text-hover-primary" href="#" target="_blank" title="instagram"><i className="fab fa-instagram"></i></a>
                          </li>
                          <li className="list-inline-item">
                              <a className="text-muted text-hover-primary" href="#" target="_blank" title="pinterest"><i className="fab fa-pinterest"></i></a>
                          </li>
                          <li className="list-inline-item">
                              <a className="text-muted text-hover-primary" href="#" target="_blank" title="vimeo"><i className="fab fa-vimeo"></i></a>
                          </li>
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                      <h6 className="text-uppercase text-dark mb-3">Shop</h6>
                      <ul className="list-unstyled">
                        {path.map(({ name, link }) => (
                          <li key={link}>
                            <Link href={link}>
                              <span
                                className="text-muted"
                                style={{
                                  fontWeight: router.pathname === link && "bold",
                                  borderBottom:
                                    router.pathname === link && "1px solid #757ce8",
                                }}
                              >
                                {name}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                  </div>
                  <div className="col-lg-2 col-md-6 mb-5 mb-lg-0">
                      <h6 className="text-uppercase text-dark mb-3">Company</h6>
                      <ul className="list-unstyled">
                          <li><a className="text-muted" href="#">Login</a></li>
                          <li><a className="text-muted" href="#">Register</a></li>
                          <li><a className="text-muted" href="#">Wishlist</a></li>
                          <li><a className="text-muted" href="#">Our Products</a></li>
                          <li><a className="text-muted" href="#">Checkouts</a></li>
                      </ul>
                  </div>
                  <div className="col-lg-4">
                      <h6 className="text-uppercase text-dark mb-3">Daily Offers &amp; Discounts</h6>
                      <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus.</p>
                      <form action="#" id="newsletter-form">
                          <div className="input-group mb-3">
                              <input type="email" className="form-control bg-transparent border-secondary border-right-0" placeholder="Your Email Address" aria-label="Your Email Address" />
                              <div className="input-group-append">
                                  <button className="btn btn-outline-secondary border-left-0" type="submit"><i className="fa fa-paper-plane text-lg text-dark"></i></button>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-md-6 text-center text-md-left">
                    <p className="mb-md-0 text-white">
                      © 2021 Your company. All rights reserved.
                    </p>
                  </div>
                  <div className="col-md-6">
                      <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                          <li className="list-inline-item">
                            {/* <img className="w-2rem" src="/svg/visa.svg" alt="..." /> */}
                          </li>
                          <li className="list-inline-item">
                            {/* <img className="w-2rem" src="/svg/mastercard.svg" alt="..." /> */}
                          </li>
                          <li className="list-inline-item">
                            {/* <img className="w-2rem" src="/svg/paypal.svg" alt="..." /> */}
                          </li>
                          <li className="list-inline-item">
                            {/* <img className="w-2rem" src="/svg/western-union.svg" alt="..." /> */}
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      {/* <Container maxWidth="lg">
        <Grid container spacing={3} justify="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: router.pathname === link && "bold",
                    borderBottom:
                      router.pathname === link && "1px solid #757ce8",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container direction="column" style={{ margin: "1.2em 0" }}>
          <Social />
        </Grid>
        <Grid
          item
          container
          component={"a"}
          target="_blank"
          rel="noreferrer noopener"
          href="https://satoruakiyama.com"
          justify="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;Satoru Akiyama
          </Typography>
        </Grid>
      </Container> */}
      <style jsx>{`
        .bg-gray-100 {
          background: #f8f9fa!important;
        }
        .bg-gray-300 {
          background: #dee2e6!important;
        }
        .bg-gray-800 {
          background: #343a40!important;
        }
        .pb-6, .py-6 {
          padding-bottom: 6rem!important;
        }
        .pt-6, .py-6 {
          padding-top: 6rem!important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;