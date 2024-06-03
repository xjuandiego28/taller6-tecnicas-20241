package models;

import jakarta.persistence.*;
import java.util.*;

@Entity
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer accountID;

    @OneToOne
    @JoinColumn(name = "userID")
    private User user;

    private String accountType;
    private Double accountBalance;
    private Date accountDateOpened;
    private Set<String> accountSecurityQuestions;

    @OneToMany(mappedBy = "account")
    private List<Transaction> transactions;

    // Getters y setters
    public Integer getAccountID() {
        return accountID;
    }

    public void setAccountID(Integer accountID) {
        this.accountID = accountID;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public Double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public Date getAccountDateOpened() {
        return accountDateOpened;
    }

    public void setAccountDateOpened(Date accountDateOpened) {
        this.accountDateOpened = accountDateOpened;
    }

    public Set<String> getAccountSecurityQuestions() {
        return accountSecurityQuestions;
    }

    public void setAccountSecurityQuestions(Set<String> accountSecurityQuestions) {
        this.accountSecurityQuestions = accountSecurityQuestions;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
}
