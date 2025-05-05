const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// Salt Password
const salt = bcrypt.genSaltSync();

async function seedUser() {

  const users = [
    {
      name: "User",
      username: "User123",
      email: "User123@example.com",
      password: bcrypt.hashSync("User123", salt),
      role: "public",
      profile_picture: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },
    {
      name: "Indra Permana",
      username: "Indra123",
      email: "Indra123h@example.com",
      password: bcrypt.hashSync("Indra123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Alya Rahmadani",
      username: "Alya123",
      email: "Alya123h@example.com",
      password: bcrypt.hashSync("Alya123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=853&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Bintang Surya",
      username: "Bintang123",
      email: "Bintang123h@example.com",
      password: bcrypt.hashSync("Bintang123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Clara Wulandari",
      username: "Clara123",
      email: "Clara123h@example.com",
      password: bcrypt.hashSync("Clara123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Jihan Salsabila",
      username: "Jihan123",
      email: "Jihan123h@example.com",
      password: bcrypt.hashSync("Jihan123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Dimas Febrian",
      username: "Dimas123",
      email: "Dimas123h@example.com",
      password: bcrypt.hashSync("Dimas123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Elvina Putri",
      username: "Elvina123",
      email: "Elvina123h@example.com",
      password: bcrypt.hashSync("Elvina123", salt),
      role: "intern",
      profile_picture: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsc3xlbnwwfHwwfHx8MA%3D%3D",
      refresh_token: null,
      university: "Universitast Negeri X",
      major: "Ilmu Komunikasi",
      internship_date: new Date("2025-03-03"),
    },
    {
      name: "Admin",
      username: "Admin123",
      email: "Admin123@example.com",
      password: bcrypt.hashSync("Admin123", salt),
      role: "admin",
      profile_picture: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },
    {
      name: "Anton Sugeni",
      username: "Anton123",
      email: "Anton123@example.com",
      password: bcrypt.hashSync("Anton123", salt),
      role: "public",
      profile_picture: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },
    {
      name: "Amanda Latifa",
      username: "Amanda123",
      email: "Amanda123@example.com",
      password: bcrypt.hashSync("Amanda123", salt),
      role: "public",
      profile_picture: "https://images.unsplash.com/photo-1574108233269-86d1199d28de?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      refresh_token: null,
      university: "Another University",
      major: "Software Engineering",
      internship_date: new Date("2023-03-01"),
    },

  ];

  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log("Users seeded successfully.");
}

module.exports = { seedUser };

