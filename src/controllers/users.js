const getUsers = (req, res) => {
  const users = [
    {
      id: "1",
      name: "João",
    },
    {
      id: "2",
      name: "Maria",
    },
    {
      id: "3",
      name: "Carlos",
    },
    {
      id: "4",
      name: "Renata",
    },
  ];

  res.status(200).json(users);
};

module.exports = {
  getUsers,
};
