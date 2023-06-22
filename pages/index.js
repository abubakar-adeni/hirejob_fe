import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "@/store/reducers/counterSlice";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Index() {

  return (
    <>
      <main className="mb-5  bg-white">
        <Navbar />
        <div className="container">
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-4 text-center text-md-start">
              <h1 className="fw-bold text-primary">
                Akselerasi Karier dengan Skills Digital
              </h1>
              <p className="my-4">
               Mencarikan pekerjaan yang sesuai denganmu.
              </p>
              <Link href="/home" className="btn btn-primary btn-lg">
                Mulai Dari Sekarang
              </Link>
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-1.png"
                className="img-fluid"
                alt="hero-image-1"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row-reverse justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 fw-bold text-primary">
                Kenapa Peworld adalah platform yang cocok untuk mencari talenta?
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  marginLeft: "0",
                  
                }}
              >
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Jaringan yang luas
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Pencarian Terperinci
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Profil Mendalam
                </li>
                <li className="mb-3">
                  <img src="tick1.png" className="me-4" alt="tick1" />
                  Komunitas Interaktif
                </li>
              </ul>
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-2.png"
                className="img-fluid"
                alt="hero-image-2"
              />
            </div>
          </div>
          <div className="row flex-column-reverse flex-md-row justify-content-between align-items-center vh-100 py-4">
            <div className="col col-md-5 text-center text-md-start">
              <h2 className="mb-4 fw-bold text-primary">Skill Tallent</h2>
              <p>Inovasi teknologi terbaru yang dimiliki oleh bakat kami</p>
              <div className="row flex-column flex-md-row">
               <div className="row">
                <div className="col-md-6 col-lg-6 col-xs-5 col-sm-5">
                  {["Java", "Kotlin", "PHP", "Javascript"].map((item, key) => (
                    <div className="d-flex align-items-center mt-0" key={key}>
                      <Image
                        className="ms-5 mt-4 mb-0 "
                        src="/tick2.png"
                        alt="tick-icon"
                        width={25}
                        height={25}
                      />
                      <p className="ms-5 mt-4 mb-0 ">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="col-md-6 col-lg-6 col-xs-5 col-sm-5">
                  {["C++", "Ruby", "Python", "10+ Bahasa lainnya"].map(
                    (item, key) => (
                      <div className="d-flex align-items-center mt-0" key={key}>
                        <Image
                          className="ms-5 mt-4 mb-0"
                          src="/tick2.png"
                          alt="tick-icon"
                          width={25}
                          height={25}
                        />
                        <p className="ms-5 mt-4 me-3 mb-0 ">{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              </div>
            </div>
            <div className="col col-md-6">
              <img
                src="hero-image-3.png"
                className="img-fluid"
                alt="hero-image-3"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="container mb-5 pb-5">
        <div
          className="row flex-column flex-md-row justify-content-between align-items-center px-5 py-4 mb-4 bg-primary"
          style={{
            height: "294px",
            backgroundImage: "url('bg-mulai-dari-sekarang.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "5vw 1vw",
          }}
        >
          <div className="col">
            <h2 className="m-0 text-white text-center text-md-start">
            Yuk, Jadi Talenta Handal Sekarang!
            </h2>
          </div>
          <div className="col text-center text-md-end">
            <Link
              href="/home"
              className="btn btn-primary btn-lg bg-light text-primary fw-bold p-3"
            >
              Mulai Dari Sekarang
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
