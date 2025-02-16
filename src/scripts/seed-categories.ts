import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryName = [
  "Travel",
  "Food",
  "Music",
  "Art",
  "Sports",
  "Fashion",
  "Lifestyle",
  "Entertainment",
  "Technology",
  "Science",
  "Politics",
  "Health",
  "Education",
  "Business",
  "Gaming",
  "Vlogs",
  "Pets & Animals",
  "Comedy",
  "DIY & Crafts",
  "Film & Animation",
  "News",
  "Motivation",
  "ASMR",
  "Books",
  "Nature",
  "History",
  "Cars & Vehicles",
  "Real Estate",
  "Social Media",
  "Podcasts",
  "Reviews",
];

async function main() {
  console.log("Seeding categories...");

  try {
    const values = categoryName.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));
    await db.insert(categories).values(values);
    console.log("Categories seeded successfully!");
  } catch (error) {
    console.error("Error seeding categories: ", error);
    process.exit(1);
  }
}

main();
