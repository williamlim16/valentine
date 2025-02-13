import ValentineCard from "@/components/ValentineCard";
type People = Record<string, {
  message: string;
  name: string;
}>;

const people: People = {
  "joy-ngu": {
    message: "May the Lord blesses you with happiness and love from people surrounding you!",
    name: "Joy Ngu"
  },
  "adam-lew": {
    message: "God's love for you is deeper than any ocean and higher than any mountain!",
    name: "Adam Lew"
  },
  "grace": {
    message: "May you feel God's love wrapping around you today and always!",
    name: "Grace"
  },
  "joseph-hartono": {
    message: "Let God's love fill your heart today and remind you how special you are.",
    name: "Joseph Hartono"
  },
  "ben-lim": {
    message: "May your days filled with love harder than your smash!!",
    name: "Ben Lim"
  },
  "fed": {
    message: "God's love is heavier than your deadlift pr ☠️",
    name: "Federico Polotan"
  },
  "irine": {
    message: "May God's love shine brightly in your heart today and every day",
    name: "Irine Tsai"
  },
  "janae-lim": {
    message: "God’s love is the heartbeat of this Valentine’s Day. May you feel it in every moment!",
    name: "Janae Lim"
  },
  "jason-qian": {
    message: "May God’s love fill your heart to overflowing today and always.",
    name: "Jason Qian"
  },
  "way": {
    message: "You are loved with a love that never fails",
    name: "Way Shern"
  },
  "amanda-tham": {
    message: "The Lord loves you more than the love of you cleaning your room!",
    name: "Amanda Tham"
  },
  "matthew": {
    message: "God's love for you is deeper than any ocean and higher than any mountain!",
    name: "En Matthew Lee"
  },
  "samuel": {
    message: "God’s love is the heartbeat of this Valentine’s Day. May you feel it in every moment!",
    name: "Samuel Yee"
  },
  "nic-nubary": {
    message: "God’s love is the heartbeat of this Valentine’s Day. May you feel it in every moment!",
    name: "Nicholas Nathaniel Nubary"
  },
  "son": {
    message: "Hey long time no see! Hopefully you are doing okay and filled with His pressence!",
    name: "Son Nguyen"
  },
  "ellen": {
    message: "May the Lord fills you with His pressence and everlasting love!",
    name: "Ellen"
  },
  "helen": {
    message: "May you be reminded of how deeply you are loved by your Heavenly Father.",
    name: "Helen"
  },
  "tang": {
    message: "May your heart is always on fire with Jesus's love!",
    name: "Tang"
  },
  "samantha": {
    message: "I’ve been thinking about how God works in mysterious ways to bring people together. I’m really glad our paths crossed. Wishing you a Valentine’s Day filled with His love and joy!",
    name: "Samantha"
  },
  "adrinna": {
    message: "The Lord's love is greater than the tastiest WeetBix I have ever had!",
    name: "Adrinna"
  },
  "best": {
    message: "May God’s love surround you today and remind you of how precious you are.",
    name: "Best"
  },
  "alicia": {
    message: "God’s love is the reason we can love others. Thank you for being a vessel of His love.",
    name: "Alicia"
  },
  "jo": {
    message: "May God’s love fill your heart to overflowing today and always.",
    name: "Jo"
  },
  "jolyn": {
    message: "God’s love is the heartbeat of this Valentine’s Day. May you feel it in every moment!",
    name: "Jolyn"
  },
  "kee-ren": {
    message: "You are a blessing to everyone around you! Happy Valentine!",
    name: "Kee Ren"
  },
  "nic-law": {
    message: "God's love is greater than the tastiest coffee I have ever had!",
    name: "Nicholas Law"
  },
  "matthew-han": {
    message: "You are a blessing to everyone around you! Happy Valentine!",
    name: "Matthew Han"
  },
  "ken": {
    message: "God's love is greater than your smash!!!",
    name: "Ken"
  },
  "riana": {
    message: "May God’s love fill your heart to overflowing today and always.",
    name: "Riana"
  },
  "norman-yap": {
    message: "God's love is more complex than strands of protein 🧬",
    name: "Norman Yap"
  },
  "adam-wong": {
    message: "God's love is uncountable unlike minion 🤯",
    name: "Adam Wong"
  },
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const slug = (await params).slug
  const person = people[slug]

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {person ? (
        <ValentineCard message={person.message} name={person.name} />
      ) : (
        <ValentineCard message="Default Message" name="Default Name" />
      )}
    </main>
  );
}
