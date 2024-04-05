import { PORTFOLIO_LINK } from "../utils/constants";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mx-2">
        Made with 💙 by
        <a href={PORTFOLIO_LINK} target="_blank" title="Teja's Profile">
          <span className="font-semibold text-lg"> @Tejas </span>
        </a>
        <span>| 𝑰𝒏𝒔𝒕𝒂𝒏𝒕 𝑬𝒂𝒕𝒔 🧡</span>
      </div>
    </div>
  );
};

export default Footer;
