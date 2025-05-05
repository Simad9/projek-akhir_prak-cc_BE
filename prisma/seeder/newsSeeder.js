const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedNews() {
  const newsData = [
    {
      taskId: 1,
      categoryId: 1,
      authorId: 3,
      title: "Teknologi AI Mengubah Cara Jurnalis Pekerja di Lapangan",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 4,
      title: "Kualitas Udata Jakarta Menurun, Ini Kata Ahli Lingkungan ",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 5,
      title: "Banjir Bandung Terjang Desa Wisata, Warga Mengungsi",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 2,
      title: "Pemerintah Luncurkan Program Magang Nasional Digital",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 5,
      title: "Peneliti Temukan Fakta baru Tentang Dampak Fast Fashion",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 6,
      title: "BUMN Buka 500 Kuota Magang Digital, Ini Syaratnya",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 2,
      title: "Berita Rancang Aplikasi Edukasi untuk Daerah 3T",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 7,
      title: "Tips Membuat CV Digital yang Menarik di Era LinkedIn",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 8,
      title: "Karyawan Muda Dorang Budaya Kerja Hybrid di Startup Lokal",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image:
        "https://images.unsplash.com/photo-1665665160518-097a89d5383e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      status: "approved",
        created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 3,
      title: "Pemerintah Resmi Naikkan UMR 2025, Ini Daftar Lengkap Tiap Provinsi",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 5,
      title: "Gempa Magnitudo 6,2 Guncang Jawa Timur, Warga Panik Berhamburan",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 8,
      title: "Banjir Bandang Landa Kabupaten Lebak, Ratusan Rumah Terendam",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 4,
      title: "Presiden Resmikan Tol Baru Penghubung Jakarta–Bandung",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 2,
      title: "Timnas Indonesia U-23 Lolos ke Semifinal Piala Asia Setelah Drama Adu Penalti",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 3,
      title: "Kampus Terapkan Kuliah Hybrid Permanen Mulai Semester Depan",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId:7,
      title: "Harga Beras Melonjak Tajam, Pedagang Pasar Tradisional Mengeluh",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 7,
      title: "Kasus Penipuan Online Melonjak, Kominfo Siapkan Aturan Baru",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 6,
      title: "Startup Lokal Raih Pendanaan Rp100 Miliar untuk Kembangkan AI Pertanian",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 4,
      title: "Festival Budaya Nusantara 2025 Resmi Dibuka di Yogyakarta",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
    {
      taskId: 1,
      categoryId: 1,
      authorId: 3,
      title: "",
      content: `
      <p>Lorem ipsum dolor sit amet consectetur. Nam urna convallis commodo consectetur est. Quis placerat egestas ornare amet urna mauris ut a. Elementum pulvinar eleifend eu nibh. Tellus dui in nec dui odio justo feugiat. Auctor amet venenatis duis etiam eu volutpat. Cum consectetur amet laoreet sapien. Urna porttitor id in dui et elit. Egestas sit arcu nisl vitae volutpat cursus. Massa ac faucibus enim suscipit sodales. Laoreet amet non iaculis sagittis sit curabitur in.</p>

      <p>Vulputate sollicitudin vel sed enim fringilla eu at. Hendrerit mauris auctor mollis vitae sit ac. Luctus sit luctus ac vel donec massa mauris. Et neque curabitur accumsan ullamcorper. Donec proin a ullamcorper sed maecenas id. Quisque at sit arcu feugiat tempor volutpat. Ac arcu leo pulvinar euismod et mattis tristique. Ac pellentesque faucibus enim magna in integer est. Blandit consequat felis sit scelerisque risus sed. Ut elit et in platea vitae vitae. Magnis tortor gravida eget morbi platea. Velit non cursus lectus diam libero molestie lacus.</p>

      <p>Lorem nunc lobortis sit etiam justo nunc. Tempor in amet netus sodales diam. Dapibus lacus pretium id quis tempor leo. Blandit in praesent sagittis malesuada enim hac. Diam cursus faucibus nisl purus. Eget hac eget sapien volutpat pulvinar purus diam. Nisl varius donec amet nisl. Consectetur tellus volutpat tellus mollis in nam. Sit quam et diam cras elementum eu. Leo tortor magna aliquam eleifend dui. Massa dui tincidunt mauris accumsan facilisis. Enim orci a at commodo vitae gravida odio. Consequat nunc volutpat amet et vel eleifend.</p>
      `,
      image: "cover.jpg",
      status: "approved",
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ];

  for (const news of newsData) {
    await prisma.news.create({
      data: news,
    });
  }

  console.log("News seeded successfully.");
}

module.exports = { seedNews };
