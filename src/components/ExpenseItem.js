import "./ExpenseItem.css";

export const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Sep 19 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.68</div>
      </div>
    </div>
  );
};
