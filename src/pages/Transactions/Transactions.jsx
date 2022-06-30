import TransitionsAccount from "../../components/TransitionsAccount/TransactionAccount";
import TransitionsList from "../../components/TransitionsList/TransactionList";

const Transactions = () => {
  return (
    <main>
      <TransitionsAccount
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amountDescription="Available Balance"
      />
      <section className="main bg-light">
        <h2 className="sr-only">Transitions list</h2>
        <TransitionsList />
      </section>
    </main>
  );
};

export default Transactions;
