import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal} 
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}