const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// HomePage = 3 Berita Terabaru
const threeNewNews = async () => {
  const news = await prisma.news.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 3,
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      category: {
        select: {
          category: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return news;
};

// HomePage = 6 berita paling disukai
const mostLikedNews = async () => {
  const result = await prisma.like.groupBy({
    by: ["newsId"],
    _count: {
      newsId: true,
    },
    orderBy: {
      _count: {
        newsId: "desc",
      },
    },
  });

  const news = await prisma.news.findMany({
    where: {
      id_news: {
        in: result.map((item) => item.newsId),
      },
    },
    select: {
      id_news: true,
      title: true,
      image: true,
      created_at: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });

  return news.map((item, index) => ({
    ...item,
    like_count: result[index]._count.newsId,
  }));
};

// HomePage = 9 berita
const homeNews = async () => {
  const news = await prisma.news.findMany({
    skip: 3, // Skip the 3 most recent news
    take: 9, // Then take the next 9 news
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return news;
};

// Berita Lainnya = 12 Berita Pagination
const pageNews = async (page, pagesSize) => {
  const news = await prisma.news.findMany({
    skip: (page - 1) * pagesSize,
    take: pagesSize,
    orderBy: {
      created_at: "desc",
    },
  });
  return news;
};

// Berita Lainnya = Helper Berita Pagination
const totalNews = async () => {
  const news = await prisma.news.count();
  return news;
};

// Detail Berita = Detail Berita sesuai id
const getNewsDetailById = async (id_news) => {
  const news = await prisma.news.findFirst({
    where: {
      id_news,
    },
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      category: {
        select: {
          category: true,
        },
      },
      author: {
        select: {
          name: true,
          internship_date: true,
        },
      },
    },
  });
  return news;
};

// Detail Berita = menghitung berapa banyak like
const getCountNewsLikes = async (id_news) => {
  const news = await prisma.like.groupBy({
    by: ["newsId"],
    _count: {
      newsId: true,
    },
    where: {
      newsId: id_news,
    },
  });
  return news;
};

// Detail Berita = menghitung berapa banyak komentar
const getCountNewsComments = async (id_news) => {
  const news = await prisma.comment.groupBy({
    by: ["newsId"],
    _count: {
      newsId: true,
    },
    where: {
      newsId: id_news,
    },
  });
  return news;
};

// Detail Berita = mengambil semua komentar
const getNewsComments = async (id_news) => {
  const comments = await prisma.comment.findMany({
    where: {
      newsId: id_news,
    },
    include: {
      user: {
        select: {
          name: true, // Hanya mengambil kolom 'name' dari User
        },
      },
    },
    orderBy: {
      timestamp: "desc", // Mengurutkan berdasarkan timestamp, terbaru di atas
    },
  });

  return comments;
};

// Detail berita = menambahkan komentar (butuh login)
const addCommentInNews = async (id_news, id_user, comment) => {
  const result = await prisma.comment.create({
    data: {
      newsId: id_news,
      userId: id_user,
      comment: comment,
    },
  });

  return result;
};

// Anak Magang menulis = Berita yang ditulis dia
const internNews = async (id_user) => {
  const news = await prisma.news.findMany({
    where: {
      authorId: id_user,
    },
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      category: {
        select: {
          category: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return news;
};

// Anak Magang menulis = Detail Penulis berita
const internNewsAuthor = async (id_user) => {
  const data = await prisma.news.findFirst({
    where: {
      authorId: id_user,
    },
    select: {
      author: {
        select: {
          id_user: true,
          name: true,
          university: true,
          major: true,
          internship_date: true,
        },
      },
    },
  });
  return data;
};

// Mencari Berita = Berita dicari berdasarkan keyword
const searchNews = async (keyword, page, pagesSize) => {
  const news = await prisma.news.findMany({
    skip: (page - 1) * pagesSize,
    take: pagesSize,
    where: {
      title: {
        contains: keyword,
      },
    },
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return news;
};

module.exports = {
  threeNewNews,
  mostLikedNews,
  homeNews,
  pageNews,
  totalNews,
  getNewsDetailById,
  getCountNewsLikes,
  getCountNewsComments,
  getNewsComments,
  addCommentInNews,
  internNews,
  internNewsAuthor,
  searchNews,
};
