import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { links } from "./Mylinks";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LabelIcon from '@mui/icons-material/Label';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const navigate = useNavigate()
  const FormateoURI = (uri) => {
    return
  }
  const fetchProduct = (uri, marca, genero) => {
    const categoryURI = String(uri).split('/').join('');
    console.log(`-> ${categoryURI} -> ${marca}`)
    navigate(`/Producto/${categoryURI}`, { state: { category: categoryURI, brand: marca, genero: genero } })

  }



  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left md:cursor-pointer group" >
            {/* LINK 1 PRIMARIO */}
            <h2

              className="py-5 flex justify-start items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}

              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180">
                <ArrowDropUpIcon ></ArrowDropUpIcon>
              </span>
            </h2>
            {/* LINK 1 PRIMARIO */}

            {/* LINK SUB 2 MENU */}
            {/* PREGUNTA SI ESTA ABILITADO EL SUB MENU TRUE O */}
            {link.submenu && (
              <div>
                {/* hidden */}
                <div className="absolute  top-12 max-[960px]:left-48 hidden m-2 group-hover:md:inline-block hover:md:inline-block">

                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-4 absolute 
                    mt-1 bg-black rotate-45 hidden"
                    ></div>
                  </div>
                  {/* DESPLEGABLE */}
                  <div className="bg-[rgb(255,255,255,0.8)] p-3 grid grid-cols-5 gap-10" key={link.id}>
                    {link.sublinks.map((mysublinks) => (

                      <div key={mysublinks.id} className="inline-block">
                        {/* SUBMENU */}
                        <h1 className="text-md font-semibold inline-block " >
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-sm text-gray-900 my-2" key={slink.id} >
                            <div
                              // to={slink.link} 
                              key={slink.id}
                              onClick={() => fetchProduct(`${slink.link}`, `${slink.name}`, `${link.name}`)}
                              className="hover:text-primary"
                            >
                              {slink.name}
                            </div>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            )}
            { /* LINK SUB 2 MENU */}
          </div>
          {/* Mobile menus */}

          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}

          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={slinks.id}>
                <div>
                  <h1

                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-10 font-semibold md:pr-0 pr-5 flex justify-start items-center group"
                  >
                    <span className="text-xl md:mt-1 md:ml-2 inline  ">

                      <LabelIcon fontSize="small"

                      ></LabelIcon>
                    </span>
                    {slinks.Head}

                  </h1>
                  <div

                    className={`${subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14 flex justify-center" key={slink.id}>
                        {/* CLICK DE REDIRECCIONES */}
                        <div onClick={() => fetchProduct(`${slink.link}`, `${slink.name}`, `${link.name}`)}>{slink.name}</div>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div >
        </div >
      ))}
    </>
  );
};

export default NavLinks;
