const Account = require("../models/Account");
const Media = require("../models/Media");
const MyList = require("../models/MyList");
const Language = require("../models/Language");
const Notification = require("../models/Notification");
const User = require("../models/User");

const {
  mutipleMongooseToObject,
  mongooseToObject,
} = require("../utils/mongoose");

const movies = [
  {
    id: 1,
    title: "Avengers Infinity War",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",
    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
  },
  {
    id: 2,
    title: "Spider Man 2",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://images.moviesanywhere.com/980ffe0de224551b0dd5db82d98ac700/112b14f0-2f94-4dab-a684-aeba4d6b3463.jpg?w=2560&r=16x9",
  },
  {
    title: "Doctor John",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfWwgDOzA_J3wgc2d0D6lWjZmX8zDY2zT2gabozKJbHCVkZfk87Nrczdt-mtKr5GTImC5Y08Bp4Y4ihguTkXFqb8PNppOmDm5jA.webp?r=bea",
  },
  {
    title: "Journey 2: The Mysterious Island",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbxvfsLboJzdI4SRrH8GcJLg3NmfvbWyn_-z8hvRMJdV4mis01Kx3G7b30gONkjvF2p7P6VlO0Q_uJNQMwqJfUvz9EbuFAz96RnNtKMx9AOWJPECan9GGKinVTiozIMVTS5Xy5Fi91AtbuAtnlWRbJPJd4XcCbgaLys.webp?r=4be",
  },
  {
    title: "Rampage",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRHOKwoq0s_DsVFV6kScYirjOVungcQaQ59yrRIdHPwanSaYZdB6CD7feAAoC-2Th5A-VbqMKBRO9wNs0feExbDiF4GkYVrPgIuF2y8ygNIMrUIyH-vsLD1a55DA0rbxlOYMpf7TC0lvZHDicLvMzsv0HllO1GyJJVk.webp?r=bdb",
  },
  {
    title: "Top Gun: Maverrick",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTTCYivGvNYFZphZZRuv2y9me_OrNOZPa-PSxsFCdwZ0R9wx1Elbh7VDdKWUFY3t5Tqd40Nso7whR6Xi2FJoHWnjMnSPxlLrGEs.webp?r=67e",
  },
  {
    title: "Avengers Infinity War",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://www.usatoday.com/gcdn/presto/2022/10/14/USAT/89e7eee0-28ac-403f-acfb-a3bd74a01790-avengers-infinity-war-1200-1200-675-675-crop-000000.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
  },
  {
    title: "Spider Man 2",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://images.moviesanywhere.com/980ffe0de224551b0dd5db82d98ac700/112b14f0-2f94-4dab-a684-aeba4d6b3463.jpg?w=2560&r=16x9",
  },
  {
    title: "Doctor John",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfWwgDOzA_J3wgc2d0D6lWjZmX8zDY2zT2gabozKJbHCVkZfk87Nrczdt-mtKr5GTImC5Y08Bp4Y4ihguTkXFqb8PNppOmDm5jA.webp?r=bea",
  },
  {
    title: "Journey 2: The Mysterious Island",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABbxvfsLboJzdI4SRrH8GcJLg3NmfvbWyn_-z8hvRMJdV4mis01Kx3G7b30gONkjvF2p7P6VlO0Q_uJNQMwqJfUvz9EbuFAz96RnNtKMx9AOWJPECan9GGKinVTiozIMVTS5Xy5Fi91AtbuAtnlWRbJPJd4XcCbgaLys.webp?r=4be",
  },
  {
    title: "Rampage",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/AvengersInfinityWar.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABRHOKwoq0s_DsVFV6kScYirjOVungcQaQ59yrRIdHPwanSaYZdB6CD7feAAoC-2Th5A-VbqMKBRO9wNs0feExbDiF4GkYVrPgIuF2y8ygNIMrUIyH-vsLD1a55DA0rbxlOYMpf7TC0lvZHDicLvMzsv0HllO1GyJJVk.webp?r=bdb",
  },
  {
    title: "Top Gun: Maverrick",
    detail: "This is detail of fiml Avengers Infinity War",
    label: "18+",

    videoURL: "/media/SpiderMan2.mp4",
    imageURL:
      "https://occ-0-325-395.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABTTCYivGvNYFZphZZRuv2y9me_OrNOZPa-PSxsFCdwZ0R9wx1Elbh7VDdKWUFY3t5Tqd40Nso7whR6Xi2FJoHWnjMnSPxlLrGEs.webp?r=67e",
  },
];

class SiteController {
  signIn(req, res) {
    res.render("sign-in");
  }

  async signUp(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;

      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }

      const existingAccount = await Account.findOne({ email: email });
      if (existingAccount) {
        return res.status(409).json({ message: "Email already exists" });
      }

      const newAccount = new Account({
        email: email,
        password: password,
      });
      await newAccount.save();
      res.status(201).json({ message: "User created successfully", user: newAccount });

    } catch (error) {
      console.error("Error creating user:", error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  search(req, res) {
    const { q } = req.query;

    console.log(q);
    res.send(movies);
  }
}


module.exports = new SiteController();
