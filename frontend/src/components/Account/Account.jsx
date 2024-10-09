import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function Account({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to="/transactions">
          <Button className="transaction-button">View Transactions</Button>
        </Link>
      </div>
    </section>
  );
}
