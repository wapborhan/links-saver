const Footer = () => {
  return (
    <>
      <div className="credit bg-slate-900 text-center text-white py-3 px-10 flex justify-between gap-5">
        <div>Copyright © {new Date().getFullYear()} . All Rights Reserved.</div>
        <div>
          Developed by{" "}
          <a href="http://www.srdreamlab.com" target="__BLANK">
            SR Dream Lab
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
