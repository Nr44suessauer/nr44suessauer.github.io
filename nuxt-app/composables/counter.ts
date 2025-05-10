// Der Zählerstand wird zentral verwaltet und kann von überall in der Anwendung zugegriffen werden
export const useCounter = () => useState('counter', () => 0);