import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
    {
        name: "Strength Training Classes",
        description: "Fun, functional and always fresh, this workout helps tone and fine-tune major muscle groups to ignite total-body strength and coordination.",
        image: image1,
    },
    {
        name: "Pilates Training Classes",
        description: "Sculpt a rock-solid core like never before! Created by YouTube fitness star Cassey Ho, this mat-based workout adds a fun pop-music twist to uplift your body and your day.",
        image: image2,
    },
    {
        name: "Core and Cardio Lift Classes",
        description: "Love your abs. Light up your fitness. This total-body conditioning class fuses cardio, core and strength training.",
        image: image3,
    },
    {
        name: "Resistance Band Training Classes",
        description: "Using resistance bands, plates, and bodyweight exercises, this 30-minute session strengthens your back, quads, hamstrings and core.",
        image: image4,
    },
    {
        name: "High-Intensity Interval Training Classes",
        description: "Stop counting the reps. Start training to the beat. Every squat, lunge, and burpee is driven by the music, helping you make it to that last rep, and maybe even five more.",
        image: image5,
    },
    {
        name: " Yoga Classes",
        description: "Release tension and stiffness, and live more fully. Combining breath work, meditation and movement sequences, our yoga practice leaves you feeling calm and limber from tip to toe.",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage } : Props) => {
    return <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
        >
            <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x:-50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <div className="md:w-3/5">
                    <HText>OUR CLASSES</HText>
                    <p className="py-5">
                        Make it a group thing and find your strength in numbers!
                    </p>
                </div>
            </motion.div>
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item: ClassType, index) => (
                        <Class
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}

                </ul>
            </div>
        </motion.div>
    </section>;
};

export default OurClasses;



