import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
import charactersBg from "@/assets/new-characters-bg.jpg";
import CharacterNetwork from "./CharacterNetwork";

const CharactersSection = () => {
  const { t } = useTranslation();
  const [selectedCharName, setSelectedCharName] = useState<string | null>(null);
  const [hoveredChar, setHoveredChar] = useState<string | null>(null);
  const characters = [
    {
      name: "SpongeBob SquarePants",
      realAnimal: "Sea Sponge",
      personality: "Optimistic, energetic, naive, and incredibly loyal. As a pristine fry cook at the Krusty Krab, he embodies pure innocence. Biologically, real sea sponges are stationary filter feeders without brains, but creator Stephen Hillenburg deliberately drew him as a rectangular synthetic kitchen sponge for comedic effect.",
      relationships: [
        { name: "Patrick Star", desc: "Best friend since childhood, they frequently catch jellyfish, blow bubbles, and go on bizarre adventures together." },
        { name: "Squidward Tentacles", desc: "Next-door neighbor and Krusty Krab coworker. SpongeBob views him as a great friend, completely oblivious to Squidward's intense disdain." },
        { name: "Mr. Krabs", desc: "Boss and ultimate idol. SpongeBob is fiercely loyal to him and the Krusty Krab." },
        { name: "Sandy Cheeks", desc: "Close friend and regular Karate sparring partner." },
        { name: "Gary the Snail", desc: "Beloved pet and surprisingly intelligent companion." },
        { name: "Mermaid Man", desc: "SpongeBob's ultimate superhero idol." },
        { name: "Squidward's Father", desc: "SpongeBob surprisingly gets along beautifully with Squidward's dad and they love to play games together." }
      ],
      image: "https://media.tenor.com/jM39-0F86WcAAAAi/spongebob-spongebob-squarepants.gif",
      color: "border-sponge-yellow",
    },
    {
      name: "Patrick Star",
      realAnimal: "Starfish",
      personality: "Dim-witted, lazy, yet fiercely loyal best friend. Patrick spends his days sleeping under a rock. Hillenburg used the real scientific fact that starfish do not possess a central brain as the direct inspiration for Patrick's lack of intelligence.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Inseparable best friend and partner in crime." },
        { name: "Squidward Tentacles", desc: "Neighbor who Patrick equally annoys, often unintentionally ruining his plans." },
        { name: "Squidward's Father", desc: "Patrick has a mysteriously great relationship with Squidward's father and they have fun playing together." }
      ],
      image: "https://media.tenor.com/B0piVWUiKaUAAAAC/patrick-drooling-patrick-star.gif",
      color: "border-shell-pink",
    },
    {
      name: "Squidward Tentacles",
      realAnimal: "Octopus",
      personality: "Cynical, arrogant, and easily irritated. He constantly dreams of becoming a famous artist and clarinet player. Despite his name ('Squid'ward), he is actually an octopus; animators gave him only 6 tentacles instead of 8 because 8 limbs were too cumbersome to animate.",
      relationships: [
        { name: "SpongeBob & Patrick", desc: "His incredibly annoying neighbors who constantly destroy his peace and quiet." },
        { name: "Squilliam Fancyson", desc: "Wealthy arch-rival from high school band class whom he constantly tries to impress." },
        { name: "Mr. Krabs", desc: "His cheap boss who pays him terribly at a job he despises." }
      ],
      image: "https://media.tenor.com/iJotvW9Mdf4AAAAC/squidward.gif",
      color: "border-ocean-light",
    },
    {
      name: "Mr. Krabs",
      realAnimal: "Crab",
      personality: "Penny-pinching, extremely greedy, yet a caring single father to a teenage sperm whale. He runs the Krusty Krab and ruthlessly guards the Krabby Patty secret formula. Like real crabs, he has a tough exterior shell and powerful pincers.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His most profitable and gullible employee." },
        { name: "Plankton", desc: "Former childhood best friend turned bitter business rival." },
        { name: "Pearl Krabs", desc: "His teenage whale daughter, whom he frequently embarrasses with his cheapness." }
      ],
      image: "https://media.tenor.com/HWqP72GJvCUAAAAC/mr-krabs-money.gif",
      color: "border-destructive/60",
    },
    {
      name: "Sandy Cheeks",
      realAnimal: "Eastern Gray Squirrel",
      personality: "Smart, athletic thrill-seeker and scientist from Texas. As a land mammal residing underwater, she relies on an oxygen-filled polyurethane Treedome and wears a specialized atmospheric diving suit to survive the crushing ocean depths.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "First real friend in Bikini Bottom, loyal testing subject for her inventions, and Karate buddy." },
        { name: "Patrick Star", desc: "Friend, though often irritated by his extreme stupidity when trying to conduct experiments." }
      ],
      image: "https://media.tenor.com/UNjQtcL5UFgAAAAC/sandy-cheeks-dancing.gif",
      color: "border-sandy-brown",
    },
    {
      name: "Plankton",
      realAnimal: "Copepod",
      personality: "Microscopic, highly intelligent, and relentlessly evil. He obsessively tries to steal the Krabby Patty secret formula to save his failing restaurant, the Chum Bucket. His massive ego heavily compensates for his minuscule size.",
      relationships: [
        { name: "Mr. Krabs", desc: "His arch-nemesis who completely monopolizes the fast-food industry." },
        { name: "Karen Plankton", desc: "His sophisticated computer wife who points out the flaws in all his evil schemes." }
      ],
      image: "https://media.tenor.com/ESEoirTqp6oAAAAC/plankton-sip.gif",
      color: "border-emerald-600",
    },
    {
      name: "Gary the Snail",
      realAnimal: "Sea Snail",
      personality: "SpongeBob's pet snail who meows like a cat. Despite his simple animalistic demeanor, Gary is highly cultured, intellectual, and often proves to be significantly smarter than his owner.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His loving owner who often misinterprets his complex thoughts as simple meows." }
      ],
      image: "https://media.tenor.com/BMUtJ8tV5Y8AAAAC/gary-gary-the-snail.gif",
      color: "border-pink-300",
    },
    {
      name: "Pearl Krabs",
      realAnimal: "Sperm Whale",
      personality: "Mr. Krabs's teenage daughter who loves shopping and pop music. Biologically, she's a massive marine mammal, which humorously contrasts with her tiny crab father.",
      image: "https://media.tenor.com/yFv6lR08yVMAAAAi/pearl-krabs.gif",
      color: "border-pink-400",
    },
    {
      name: "Mrs. Puff",
      realAnimal: "Pufferfish",
      personality: "SpongeBob's paranoid and easily stressed boating school teacher. True to her species, whenever she is startled or crashes due to SpongeBob's reckless driving, she inflates defensively into a large spiky ball.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Her eternal student who causes her severe psychological trauma and physical injuries." },
        { name: "Mr. Krabs", desc: "Occasionally dates him, though his cheapness often ruins the mood." }
      ],
      image: "https://media.tenor.com/uRXXy1ZJqI0AAAAi/mrs-puff.gif",
      color: "border-yellow-300",
    },
    {
      name: "Larry the Lobster",
      realAnimal: "Lobster",
      personality: "A muscular, extreme sports-loving lifeguard at Goo Lagoon. He represents the stereotypical 'gym bro' beachgoer in the underwater world.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Considers SpongeBob a weak but likable companion." },
        { name: "Sandy Cheeks", desc: "Fellow fitness enthusiast and lifting partner." },
        { name: "Don the Whale", desc: "Fellow muscular beach regular and lifting competitor." }
      ],
      image: "https://media.tenor.com/xHqNInZkSgcAAAAi/larry.gif",
      color: "border-red-500",
    },
    {
      name: "Karen Plankton",
      realAnimal: "Supercomputer",
      personality: "Plankton's robotic wife and Mark II UNIVAC computer. She is often the brains behind his schemes and possesses far more common sense than her megalomaniacal husband.",
      relationships: [
        { name: "Plankton", desc: "Her husband and creator. She constantly deals with his inadequacies and failures." },
        { name: "Sandy Cheeks", desc: "Mutual respect as fellow women of science." }
      ],
      image: "https://media.tenor.com/0M20k8eP8S4AAAAi/karen-plankton.gif",
      color: "border-green-400",
    },
    {
      name: "Mermaid Man",
      realAnimal: "Human",
      personality: "An elderly, retired superhero residing in the Shady Shoals Rest Home. He wears a star-shaped starfish on his nose and spoofs classic comic book heroes like Aquaman.",
      relationships: [
        { name: "Barnacle Boy", desc: "His trusty lifelong sidekick who frequently absorbs his senior moments." },
        { name: "SpongeBob & Patrick", desc: "Obsessive fanboys whom he finds both helpful and extremely annoying." },
        { name: "Man Ray", desc: "His frozen arch-nemesis." }
      ],
      image: "https://media.tenor.com/MqUifHLx9gUAAAAC/mermaid-man-donuts.gif",
      color: "border-orange-400",
    },
    {
      name: "Barnacle Boy",
      realAnimal: "Human",
      personality: "Mermaid Man's grumpy sidekick who is perpetually treated as an infant despite being a senior citizen. He is a parody of Robin from Batman.",
      relationships: [
        { name: "Mermaid Man", desc: "His mentor who refuses to respect his maturity." },
        { name: "SpongeBob SquarePants", desc: "President of his fan club who irritates him deeply." }
      ],
      image: "https://media.tenor.com/uxV9s8bnXf8AAAAC/barnacle-boy-atomic-flounder.gif",
      color: "border-blue-400",
    },
    {
      name: "Flying Dutchman",
      realAnimal: "Ghostly Spirit",
      personality: "An irritable, green glowing pirate ghost based on nautical folklore. He roams the oceans collecting souls and constantly looking for his missing dining sock.",
      relationships: [
        { name: "SpongeBob & Patrick", desc: "Have acted as his ghost crew in the past, entirely ruining his scary reputation." },
        { name: "Squidward Tentacles", desc: "Was momentarily dragged to the Fly of Despair due to his skepticism." }
      ],
      image: "https://media.tenor.com/PeWSaX2hosIAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-green-300",
    },
    {
      name: "King Neptune",
      realAnimal: "Merman Deity",
      personality: "The god of the sea and tyrannical ruler of Atlantis. He possesses a magical trident and is incredibly sensitive about his creeping baldness.",
      relationships: [
        { name: "Princess Mindy", desc: "His daughter who frequently questions his harsh dictatorial judgements." },
        { name: "SpongeBob SquarePants", desc: "Reclaimed his stolen crown from Shell City." }
      ],
      image: "https://media.tenor.com/IksBlybQnqkAAAAi/king-neptune.gif",
      color: "border-cyan-400",
    },
    {
      name: "Squilliam Fancyson",
      realAnimal: "Octopus",
      personality: "Squidward's wealthy, arrogant high school rival. He has a unibrow, a luxurious lifestyle, and everything Squidward desperately wishes he had.",
      relationships: [
        { name: "Squidward Tentacles", desc: "High school band rival whom he loves to humiliate." }
      ],
      image: "https://media.tenor.com/pRE060dn_7IAAAAC/sponge-bob-squillium-returns-spongebob-squarepants.gif",
      color: "border-purple-400",
    },
    {
      name: "Patchy the Pirate",
      realAnimal: "Human",
      personality: "The live-action president of the SpongeBob fan club. Portrayed by Tom Kenny (SpongeBob's voice actor), he hosts various special episodes from his home in Encino, California.",
      relationships: [
        { name: "Potty the Parrot", desc: "His highly cynical and annoying avian co-host and roommate." },
        { name: "SpongeBob SquarePants", desc: "Patchy's absolute idol. He is the ultimate superfan." }
      ],
      image: "https://media.tenor.com/plC0H_UTuXQAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-600",
    },
    {
      name: "Potty the Parrot",
      realAnimal: "Parrot Puppet",
      personality: "Patchy's cynical wooden puppet sidekick, visible strings and all. He constantly mocks and annoys Patchy during the live-action segments.",
      relationships: [
        { name: "Patchy the Pirate", desc: "His bumbling human companion whom he loves to prank with explosives." }
      ],
      image: "https://media.tenor.com/jc-bKqGdpfMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-green-500",
    },
    {
      name: "Bubble Buddy",
      realAnimal: "Living Soap Bubble",
      personality: "A silent, anthropomorphic bubble blown by SpongeBob out of loneliness. Despite having no mass and being made of soap, he somehow manages to inconvenience the entire town.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "His creator and only initial friend." }
      ],
      image: "https://media.tenor.com/zxovvSb5efMAAAAC/spongebob-yay.gif",
      color: "border-blue-300",
    },
    {
      name: "Fred",
      realAnimal: "Fish",
      personality: "The most famous background character, universally known for screaming 'My leg!' in moments of mass destruction and chaos across Bikini Bottom.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Frequently gets his leg broken as collateral damage of SpongeBob's antics." }
      ],
      image: "https://media.tenor.com/nqER1YForhIAAAAC/spongebob-squarepants-fred.gif",
      color: "border-brown-400",
    },
    {
      name: "Bubble Bass",
      realAnimal: "Bass Fish",
      personality: "An overweight, nitpicky, and arrogant fast-food critic. He infamously hid the pickles under his tongue to sabotage SpongeBob's fry cook reputation.",
      image: "https://media.tenor.com/dOi172Kvhp0AAAAC/crying-bubble-bass.gif",
      color: "border-olive-500",
    },
    {
      name: "Kevin C. Cucumber",
      realAnimal: "Sea Cucumber",
      personality: "The snobby leader of the Jellyspotters jellyfishing club. He wears a crown and acts incredibly elitist towards SpongeBob.",
      image: "https://media.tenor.com/r5JFzNjE8N4AAAAC/kevin-c-cucumber-spongebob.gif",
      color: "border-green-600",
    },
    {
      name: "David Hasselhoff",
      realAnimal: "Human",
      personality: "The actual actor, appearing in real life during the SpongeBob SquarePants Movie to act as a speedboat, propelling SpongeBob and Patrick back to Bikini Bottom.",
      image: "https://media.tenor.com/pnS3RIa1leIAAAAC/david-hasselhoff-pecs.gif",
      color: "border-red-300",
    },
    {
      name: "SpongeGar",
      realAnimal: "Prehistoric Sponge",
      personality: "SpongeBob's caveman ancestor who discovered fire. He communicates only in grunts and primitive language.",
      image: "https://media.tenor.com/CgUsa4JJtrkAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-orange-500",
    },
    {
      name: "Stanley S. SquarePants",
      realAnimal: "Sea Sponge",
      personality: "SpongeBob's accident-prone cousin. Unlike SpongeBob, he destroys anything he touches, from cameras to Krabby Patties.",
      image: "https://media.tenor.com/2Ekd1OjkNmgAAAAC/spongebob-stanley-s-squarepants.gif",
      color: "border-gray-400",
    },
    {
      name: "Grandpa Redbeard",
      realAnimal: "Crab",
      personality: "Mr. Krabs's tough, pirate grandfather who expected Eugene to carry on the family tradition of piracy, only to learn that capitalist restaurant pricing is the modern form of thievery.",
      image: "https://media.tenor.com/4Wnig_9WkYMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-700",
    },
    {
      name: "Red Mist Squidward",
      realAnimal: "Octopus",
      personality: "A legendary internet creepypasta involving an alleged lost episode where Squidward descended into madness. The show's creators actually acknowledged the meme by hiding a frame of it in the show.",
      image: "https://media.tenor.com/0Ql4irBFLPAAAAAC/red-mist.gif",
      color: "border-red-800",
    },
    {
      name: "Jack Kahuna Laguna",
      realAnimal: "Human/Fish Hybrid",
      personality: "A legendary surfer who rides the biggest waves. He has long blonde hair and approaches surfing like a spiritual philosophy.",
      image: "https://media.tenor.com/W-JKVxiuuHYAAAAC/monyetpisanggoreng.gif",
      color: "border-yellow-400",
    },
    {
      name: "Giant Eel",
      realAnimal: "Eel",
      personality: "A massive, terrifying deep-sea creature that preys on smaller fish in the dark trenches surrounding Bikini Bottom.",
      image: "https://media.tenor.com/Srmzm7DDMwsAAAAC/i%27m-a-big-fan-moray-eel.gif",
      color: "border-gray-600",
    },
    {
      name: "Princess Mindy",
      realAnimal: "Mermaid",
      personality: "King Neptune's kind-hearted daughter who believes in SpongeBob and Patrick's bravery during their quest to Shell City.",
      image: "https://media.tenor.com/eiB-1QYvu0kAAAAC/patrick-star-spongebob.gif",
      color: "border-pink-300",
    },
    {
      name: "Victor Krabs",
      realAnimal: "Crab",
      personality: "Mr. Krabs's stern father who gifted him a rusty penny, instilling in Eugene his lifelong obsession with money.",
      image: "https://media.tenor.com/zytLw52gsngAAAAC/spongebob-mr-krabs.gif",
      color: "border-yellow-600",
    },
    {
      name: "Queen Jellyfish",
      realAnimal: "Jellyfish",
      personality: "The massive, monarchical leader of the jellyfish in Jellyfish Fields. She wields immense power over the swarms.",
      image: "https://media.tenor.com/buOdVaNDBfoAAAAC/kissy-face-spongebob.gif",
      color: "border-pink-500",
    },
    {
      name: "Anchovies",
      realAnimal: "Anchovy",
      personality: "A massive, chaotic swarm of tiny fish that communicate strictly through the word 'meep' and overrun businesses as a collective hive.",
      image: "https://media.tenor.com/suRsIyzeR3UAAAAC/spongebob-anchovies.gif",
      color: "border-blue-200",
    },
    {
      name: "Master Udon",
      realAnimal: "Fish",
      personality: "A muscular martial artist and real estate scammer who operates a shady timeshare business disguised as karate island.",
      image: "https://media.tenor.com/wgAHFIC4GEUAAAAC/shibada-spongebob.gif",
      color: "border-gray-500",
    },
    {
      name: "Sea Bear",
      realAnimal: "Bear-Fish",
      personality: "A fearsome wilderness predator possessing elements of a bear and a fish. It attacks anyone who violates absurd rules like wearing a sombrero upside down.",
      image: "https://media.tenor.com/zLEmQ2AYTg4AAAAC/seabear-spongebob.gif",
      color: "border-amber-700",
    },
    {
      name: "Sea Rhinoceros",
      realAnimal: "Rhinoceros-Fish",
      personality: "An even deadlier predator than the Sea Bear, deterred only by wearing anti-Sea Rhinoceros undergarments.",
      image: "https://media.tenor.com/mRihot_c0WMAAAAC/visualries.gif",
      color: "border-slate-500",
    },
    {
      name: "Hans",
      realAnimal: "Human Hand",
      personality: "A literal live-action human hand that occasionally sweeps down into the cartoon world to grab characters.",
      image: "https://media.tenor.com/oizeGRp6p_4AAAAC/milelumax-mileven.gif",
      color: "border-orange-300",
    },
    {
      name: "Magic Conch Shell",
      realAnimal: "Toy Shell",
      personality: "A plastic pull-string toy that SpongeBob and Patrick treat as an omniscient deity, following its random 'yes' or 'no' advice to the absolute letter.",
      image: "https://media.tenor.com/5oeQpHNG2gEAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-purple-300",
    },
    {
      name: "Squilvia",
      realAnimal: "Octopus",
      personality: "A sophisticated octopus whom Squidward falls in love with. They share a snobby demeanor and mutual disdain for SpongeBob.",
      image: "https://media.tenor.com/ZiWc4QZR2dAAAAAC/nickelodeon-spongebob.gif",
      color: "border-teal-400",
    },
    {
      name: "Mama Krabs",
      realAnimal: "Crab",
      personality: "Eugene's overbearing mother who lives in an anchor-shaped house. Keep an eye on her; she once briefly dated Plankton.",
      image: "https://media.tenor.com/uV3DuRw1fl4AAAAC/spongebob-mama-krabs.gif",
      color: "border-pink-600",
    },
    {
      name: "Grandma SquarePants",
      realAnimal: "Sea Sponge",
      personality: "SpongeBob's loving grandmother who treats him like a baby. She bakes legendary cookies and refuses to let SpongeBob grow up completely.",
      relationships: [
        { name: "SpongeBob SquarePants", desc: "Her precious, adult-aged grandson whom she loves to swaddle." }
      ],
      image: "https://media.tenor.com/40D_7nWVUzAAAAAC/spongebob-squarepants-grandma-squarepants.gif",
      color: "border-purple-400",
    },
    {
      name: "Harold SquarePants",
      realAnimal: "Unknown",
      personality: "Harold SquarePants is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/7EdqeuHWWn8AAAAC/spongebob-squarepants.gif",
      color: "border-orange-400",
    },
    {
      name: "Margaret SquarePants",
      realAnimal: "Unknown",
      personality: "Margaret SquarePants is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/I6fKCL_Ck5YAAAAC/sppongebob-squarepants-fun-song-f-is-for-friends-who-do-stuff-together-spongebob-squarepants.gif",
      color: "border-purple-400",
    },
    {
      name: "Man Ray",
      realAnimal: "Unknown",
      personality: "Man Ray is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/JjMLe8gLmacAAAAC/attack-man-ray.gif",
      color: "border-orange-400",
    },
    {
      name: "Dirty Bubble",
      realAnimal: "Unknown",
      personality: "Dirty Bubble is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/Kg6qo3wsvtQAAAAC/spongebob-squarepants-dirty-bubble.gif",
      color: "border-green-400",
    },
    {
      name: "Perch Perkins",
      realAnimal: "Unknown",
      personality: "Perch Perkins is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/7JfWuyCTUcMAAAAC/beat-up-harvey.gif",
      color: "border-blue-400",
    },
    {
      name: "Old Man Jenkins",
      realAnimal: "Unknown",
      personality: "Old Man Jenkins is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/4Wnig_9WkYMAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-red-400",
    },
    {
      name: "Nat Peterson",
      realAnimal: "Unknown",
      personality: "Nat Peterson is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/Ls3_RQNDtFwAAAAC/eatin-chum-eating-chum.gif",
      color: "border-red-400",
    },
    {
      name: "Tom",
      realAnimal: "Unknown",
      personality: "Tom is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/cCDm-oZovDoAAAAC/i-got-music-for-you-tom-kenny.gif",
      color: "border-orange-400",
    },
    {
      name: "Nancy",
      realAnimal: "Unknown",
      personality: "Nancy is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/QVjR1Iycq3wAAAAC/im-home-here.gif",
      color: "border-blue-400",
    },
    {
      name: "Harold",
      realAnimal: "Unknown",
      personality: "Harold is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/4Sv-UyPp768AAAAC/spongebob-spongebob-meme.gif",
      color: "border-teal-400",
    },
    {
      name: "Scooter",
      realAnimal: "Unknown",
      personality: "Scooter is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/9WKKjpfgOz4AAAAC/scooter-robux.gif",
      color: "border-purple-400",
    },
    {
      name: "Flats the Flounder",
      realAnimal: "Unknown",
      personality: "Flats the Flounder is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/QO0GWfww27cAAAAC/sb-spongebob.gif",
      color: "border-teal-400",
    },
    {
      name: "Jellyfish King",
      realAnimal: "Unknown",
      personality: "Jellyfish King is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/buOdVaNDBfoAAAAC/kissy-face-spongebob.gif",
      color: "border-purple-400",
    },
    {
      name: "Dennis",
      realAnimal: "Unknown",
      personality: "Dennis is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/veZVj7stgGsAAAAC/drama-spongebob.gif",
      color: "border-purple-400",
    },
    {
      name: "The Cyclops",
      realAnimal: "Unknown",
      personality: "The Cyclops is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/IVQ2OP1WTIYAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-orange-400",
    },
    {
      name: "DoodleBob",
      realAnimal: "Unknown",
      personality: "DoodleBob is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/2XkmAXc_AugAAAAC/spongebob-spongebob-squarepants.gif",
      color: "border-blue-400",
    },
    {
      name: "Don the Whale",
      realAnimal: "Unknown",
      personality: "Don the Whale is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/AasjZaSXqLkAAAAC/whale-diablo-immortal.gif",
      color: "border-purple-400",
    },
    {
      name: "Chip",
      realAnimal: "Unknown",
      personality: "Chip is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/2RX3TS20BAsAAAAC/justalotto.gif",
      color: "border-blue-400",
    },
    {
      name: "Penny",
      realAnimal: "Unknown",
      personality: "Penny is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/B49R2Vu-wcgAAAAC/spongebob-money.gif",
      color: "border-green-400",
    },
    {
      name: "Narlene",
      realAnimal: "Unknown",
      personality: "Narlene is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/LN9ocvi3z6UAAAAC/bh187-spongebob.gif",
      color: "border-teal-400",
    },
    {
      name: "Nobby",
      realAnimal: "Unknown",
      personality: "Nobby is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/itUK44ktVrkAAAAC/we-are-coming-spongebob-squarepants.gif",
      color: "border-pink-400",
    },
    {
      name: "Captain Blue",
      realAnimal: "Unknown",
      personality: "Captain Blue is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/ztqiZ5K2_dsAAAAC/spongebob.gif",
      color: "border-pink-400",
    },
    {
      name: "Mrs Tentacles",
      realAnimal: "Unknown",
      personality: "Mrs Tentacles is a character in SpongeBob SquarePants.",
      image: "https://media.tenor.com/VrWuyWQVAfsAAAAC/squidward-squidward-tentacles.gif",
      color: "border-blue-400",
    }
];

  const selectedChar = characters.find((c) => c.name === selectedCharName);

  const getRelatedCharacters = (charName: string) => {
    const mainObj = characters.find(c => c.name === charName);
    if (!mainObj) return [];
    
    const explicit = (mainObj as any).relationships?.map((r: any) => r.name) || [];
    const implicit = characters.filter(c => (c as any).relationships?.some((r: any) => r.name === charName)).map(c => c.name);
    
    // Deduplicate names and fetch character objects
    const uniqueNames = Array.from(new Set([...explicit, ...implicit]));
    return uniqueNames.map(name => characters.find(c => c.name === name)).filter(Boolean);
  };

  const isRelated = (targetName: string, hoveredName: string | null) => {
    if (!hoveredName) return false;
    if (targetName === hoveredName) return true;
    
    const relatedList = getRelatedCharacters(hoveredName);
    return relatedList.some(c => c?.name === targetName);
  };

  return (
    <>
      {/* Fixed Full-Screen Background */}
      <div
        className="fixed inset-0 w-full h-full z-[-1] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${charactersBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
      </div>

      <section className="animate-fade-in-up relative z-10 w-full pt-4">
        {selectedChar ? (
          <div className="animate-fade-in-up">
            <button
              onClick={() => setSelectedCharName(null)}
              className="flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-white/70 hover:bg-white/90 text-ocean-deep font-display text-sm transition-all shadow-sm border-2 border-primary"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('characters.back')}
            </button>
            <div className={`rounded-2xl bg-white/80 p-6 md:p-8 border-2 shadow-lg ${selectedChar.color}`}>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6 text-center md:text-left">
                {selectedChar.image ? (
                  <img src={selectedChar.image} alt={selectedChar.name} className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-md" />
                ) : (
                  <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-200/50 rounded-full flex items-center justify-center text-4xl text-gray-400">?</div>
                )}
                <div>
                  <h3 className="font-display text-2xl md:text-3xl text-ocean-deep leading-tight mb-2">{selectedChar.name}</h3>
                  <p className="font-body text-xs md:text-sm font-semibold text-muted-foreground italic px-3 py-1 bg-black/5 rounded-full inline-block">{selectedChar.realAnimal}</p>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-display text-xl text-primary border-b-2 border-primary/20 pb-2">{t('characters.personality')}</h4>
                <p className="font-body text-[15px] text-foreground/90 leading-relaxed whitespace-pre-line">
                  {selectedChar.personality}
                </p>
                
                {/* Dynamically render relationships including bidirectional references */}
                {(() => {
                  const explicitRels = (selectedChar as any).relationships || [];
                  const implicitRels = characters.reduce((acc: any[], otherChar: any) => {
                    if (otherChar.name !== selectedChar.name && otherChar.relationships) {
                      const ref = otherChar.relationships.find((r: any) => r.name === selectedChar.name);
                      if (ref && !explicitRels.some((er: any) => er.name === otherChar.name)) {
                        acc.push({ name: otherChar.name, desc: `Linked relationship. (Click to view ${otherChar.name}'s profile to learn more!)` });
                      }
                    }
                    return acc;
                  }, []);
                  
                  const allRels = [...explicitRels, ...implicitRels];
                  
                  if (allRels.length === 0) return null;

                  return (
                    <div className="mt-8 pt-4">
                      <h4 className="font-display text-xl text-primary border-b-2 border-primary/20 pb-2">{t('characters.relationships', 'Known Relationships')}</h4>
                      <ul className="mt-4 space-y-3">
                        {allRels.map((rel: any, idx: number) => {
                          const relCharObj = characters.find(c => c.name === rel.name);
                          return (
                            <li key={idx} className="font-body text-[15px] text-foreground/90 bg-white rounded-xl p-3 border-2 border-primary/10 shadow-sm transition-all hover:border-primary/40 hover:shadow-md">
                              <button 
                                onClick={() => {
                                  setSelectedCharName(rel.name);
                                  window.scrollTo({ top: 300, behavior: 'smooth' }); // Slightly scroll up so profile is fully visible
                                }}
                                className="flex items-start text-left gap-4 w-full group focus:outline-none"
                              >
                                {relCharObj && (
                                  <div className={`w-12 h-12 shrink-0 rounded-full border-2 ${relCharObj.color} bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform`}>
                                    {relCharObj.image ? (
                                      <img src={relCharObj.image} alt={relCharObj.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                      <span className="text-sm font-bold text-gray-400">?</span>
                                    )}
                                  </div>
                                )}
                                <div className="flex-1 mt-0.5">
                                  <strong className="text-[#002f5a] font-display block mb-1 text-[15px] group-hover:text-primary transition-colors">{rel.name}</strong> 
                                  <span className="text-gray-600 block text-[14px] leading-snug">{rel.desc}</span>
                                </div>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-8 px-4 w-full flex justify-center pb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 max-w-7xl">
              {characters.map((char) => {
                const isDimmed = hoveredChar !== null && hoveredChar !== char.name;
                
                return (
                  <button
                    key={char.name}
                    onClick={() => setSelectedCharName(char.name)}
                    onMouseEnter={() => setHoveredChar(char.name)}
                    onMouseLeave={() => setHoveredChar(null)}
                    className={`relative flex flex-col items-center group focus:outline-none transition-all duration-500 ${
                      hoveredChar === char.name ? 'z-50 drop-shadow-[0_0_25px_rgba(255,255,255,1)]' : 
                      isDimmed ? 'opacity-10 scale-95 blur-md pointer-events-none' : 
                      'hover:scale-110 active:scale-95'
                    }`}
                  >
                    
                    {/* Orbiting Relationships Constellation - Fixed CSS Transform Override Bug */}
                    {hoveredChar === char.name && (() => {
                      const orbitingChars = getRelatedCharacters(char.name);
                      if (orbitingChars.length === 0) return null;
                      
                      return (
                        <div className="absolute top-12 sm:top-14 left-1/2 w-0 h-0 pointer-events-none z-[200]">
                          {orbitingChars.map((rel: any, index: number, arr: any[]) => {
                             const maxPerRing = 7;
                             const ringIndex = Math.floor(index / maxPerRing);
                             const itemsInThisRing = ringIndex === Math.floor((arr.length - 1) / maxPerRing) ? (arr.length % maxPerRing) || maxPerRing : maxPerRing;
                             const posInRing = index % maxPerRing;
                             
                             const angle = (Math.PI * 2 * posInRing) / itemsInThisRing;
                             const radius = 130 + (ringIndex * 100); 
                             const x = Math.cos(angle) * radius;
                             const y = Math.sin(angle) * radius;
                             
                             return (
                               // The outer wrapper handles raw position offsets without using 'transform'
                               <div 
                                 key={rel.name}
                                 className="absolute pointer-events-none"
                                 style={{ 
                                    left: `${x}px`,
                                    top: `${y}px`,
                                 }}
                               >
                                 {/* The inner wrapper handles the animation, ensuring negative margins perfectly center the 64px box on the exact coordinate */}
                                 <div 
                                    className={`absolute -left-7 -top-7 md:-left-8 md:-top-8 w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] ${rel.color} bg-white shadow-xl animate-breathe`}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                 >
                                    {rel.image ? (
                                        <img src={rel.image} className="w-full h-full rounded-full object-cover" alt={rel.name} />
                                    ) : (
                                        <span className="w-full h-full flex items-center justify-center font-bold text-gray-400">?</span>
                                    )}
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-black/80 rounded-md px-2 py-0.5 whitespace-nowrap z-[210]">
                                      <span className="text-[10px] md:text-xs font-bold text-cyan-200 drop-shadow-md">
                                        {rel.name}
                                      </span>
                                    </div>
                                 </div>
                               </div>
                             );
                          })}
                        </div>
                      )
                    })()}

                    <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 overflow-hidden shadow-lg ${char.color} bg-white flex items-center justify-center p-1 transition-all`}>
                      {char.image ? (
                        <img src={char.image} alt={char.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-3xl font-bold text-gray-400">?</span>
                      )}
                    </div>
                    <div className="mt-3 text-center">
                      <h3 className={`font-display font-bold text-sm md:text-base leading-tight transition-colors ${hoveredChar === char.name ? 'text-primary drop-shadow-[0_0_5px_rgba(255,255,0,1)]' : 'text-[#002f5a] drop-shadow-sm group-hover:text-primary'}`}>
                        {char.name}
                      </h3>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default CharactersSection;
