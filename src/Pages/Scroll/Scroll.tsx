import React, {useState} from 'react'
import "./Scroll.css"
import { Waypoint } from 'react-waypoint'
import {useSpring, animated} from "react-spring"

export default function Scroll() {
    
    const [toggleTxt, setToggleTxt] = useState(false)

    const animation = useSpring({ //animation de base
        opacity : toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0)" : "translateX(-50%)"
    })
    
    return (
        <div>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolorum quisquam amet accusantium doloremque recusandae exercitationem assumenda earum pariatur suscipit, non qui quo ea alias, dolores, saepe laboriosam id impedit itaque cupiditate deserunt! Nulla quos perferendis quam et repudiandae architecto fugit exercitationem. Placeat quia laudantium officia veniam minus harum quaerat cum obcaecati maxime distinctio inventore excepturi quae nihil doloremque ullam quos qui explicabo, debitis culpa, autem quod. Ipsa, sunt vel a fuga perspiciatis eum recusandae, iure vero molestiae, molestias qui voluptatum culpa ut? Repudiandae autem delectus impedit maiores, iusto nisi dolores atque dolore, error odio provident perferendis eligendi esse, accusantium saepe est voluptatum at voluptatem molestiae. Ullam totam ipsa obcaecati voluptatum optio natus accusamus nisi earum id illum. Minus ad quia veritatis, eligendi assumenda, minima id beatae ut nesciunt cupiditate error. Ipsam voluptatem harum tenetur blanditiis et magnam perspiciatis molestias! Impedit, aperiam quam cupiditate consectetur voluptatum vitae nemo nobis voluptatibus quae explicabo facilis, odit quos inventore quibusdam delectus ipsam. Laborum illo accusantium nemo repellat similique quae iure perspiciatis, rem ad incidunt quas, repudiandae suscipit laudantium! Voluptatem repellat ab, quod nobis, quam fuga laudantium consequuntur iste est harum itaque. Vitae, cumque dolores voluptates est accusamus quibusdam corporis cum laudantium at!

            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolorum quisquam amet accusantium doloremque recusandae exercitationem assumenda earum pariatur suscipit, non qui quo ea alias, dolores, saepe laboriosam id impedit itaque cupiditate deserunt! Nulla quos perferendis quam et repudiandae architecto fugit exercitationem. Placeat quia laudantium officia veniam minus harum quaerat cum obcaecati maxime distinctio inventore excepturi quae nihil doloremque ullam quos qui explicabo, debitis culpa, autem quod. Ipsa, sunt vel a fuga perspiciatis eum recusandae, iure vero molestiae, molestias qui voluptatum culpa ut? Repudiandae autem delectus impedit maiores, iusto nisi dolores atque dolore, error odio provident perferendis eligendi esse, accusantium saepe est voluptatum at voluptatem molestiae. Ullam totam ipsa obcaecati voluptatum optio natus accusamus nisi earum id illum. Minus ad quia veritatis, eligendi assumenda, minima id beatae ut nesciunt cupiditate error. Ipsam voluptatem harum tenetur blanditiis et magnam perspiciatis molestias! Impedit, aperiam quam cupiditate consectetur voluptatum vitae nemo nobis voluptatibus quae explicabo facilis, odit quos inventore quibusdam delectus ipsam. Laborum illo accusantium nemo repellat similique quae iure perspiciatis, rem ad incidunt quas, repudiandae suscipit laudantium! Voluptatem repellat ab, quod nobis, quam fuga laudantium consequuntur iste est harum itaque. Vitae, cumque dolores voluptates est accusamus quibusdam corporis cum laudantium at!

            </p>

            <Waypoint //permet de déclencer qlq chose
            bottomOffset="30%" //se déclenche àpd de 30% du bottom
            onEnter={() => {
                if(!toggleTxt){
                    setToggleTxt(true)
                }
            }}
            />
            <animated.div style={animation} className="cta-section"> {/* notre animation est liéee au toggle*/}
                <h2>Don't Miss anything</h2>
                <form>
                    <label htmlFor="email">Subscribe to our newsletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolorum quisquam amet accusantium doloremque recusandae exercitationem assumenda earum pariatur suscipit, non qui quo ea alias, dolores, saepe laboriosam id impedit itaque cupiditate deserunt! Nulla quos perferendis quam et repudiandae architecto fugit exercitationem. Placeat quia laudantium officia veniam minus harum quaerat cum obcaecati maxime distinctio inventore excepturi quae nihil doloremque ullam quos qui explicabo, debitis culpa, autem quod. Ipsa, sunt vel a fuga perspiciatis eum recusandae, iure vero molestiae, molestias qui voluptatum culpa ut? Repudiandae autem delectus impedit maiores, iusto nisi dolores atque dolore, error odio provident perferendis eligendi esse, accusantium saepe est voluptatum at voluptatem molestiae. Ullam totam ipsa obcaecati voluptatum optio natus accusamus nisi earum id illum. Minus ad quia veritatis, eligendi assumenda, minima id beatae ut nesciunt cupiditate error. Ipsam voluptatem harum tenetur blanditiis et magnam perspiciatis molestias! Impedit, aperiam quam cupiditate consectetur voluptatum vitae nemo nobis voluptatibus quae explicabo facilis, odit quos inventore quibusdam delectus ipsam. Laborum illo accusantium nemo repellat similique quae iure perspiciatis, rem ad incidunt quas, repudiandae suscipit laudantium! Voluptatem repellat ab, quod nobis, quam fuga laudantium consequuntur iste est harum itaque. Vitae, cumque dolores voluptates est accusamus quibusdam corporis cum laudantium at!

            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolorum quisquam amet accusantium doloremque recusandae exercitationem assumenda earum pariatur suscipit, non qui quo ea alias, dolores, saepe laboriosam id impedit itaque cupiditate deserunt! Nulla quos perferendis quam et repudiandae architecto fugit exercitationem. Placeat quia laudantium officia veniam minus harum quaerat cum obcaecati maxime distinctio inventore excepturi quae nihil doloremque ullam quos qui explicabo, debitis culpa, autem quod. Ipsa, sunt vel a fuga perspiciatis eum recusandae, iure vero molestiae, molestias qui voluptatum culpa ut? Repudiandae autem delectus impedit maiores, iusto nisi dolores atque dolore, error odio provident perferendis eligendi esse, accusantium saepe est voluptatum at voluptatem molestiae. Ullam totam ipsa obcaecati voluptatum optio natus accusamus nisi earum id illum. Minus ad quia veritatis, eligendi assumenda, minima id beatae ut nesciunt cupiditate error. Ipsam voluptatem harum tenetur blanditiis et magnam perspiciatis molestias! Impedit, aperiam quam cupiditate consectetur voluptatum vitae nemo nobis voluptatibus quae explicabo facilis, odit quos inventore quibusdam delectus ipsam. Laborum illo accusantium nemo repellat similique quae iure perspiciatis, rem ad incidunt quas, repudiandae suscipit laudantium! Voluptatem repellat ab, quod nobis, quam fuga laudantium consequuntur iste est harum itaque. Vitae, cumque dolores voluptates est accusamus quibusdam corporis cum laudantium at!

            </p>
            <p className="scroll-txt">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quasi dolorum quisquam amet accusantium doloremque recusandae exercitationem assumenda earum pariatur suscipit, non qui quo ea alias, dolores, saepe laboriosam id impedit itaque cupiditate deserunt! Nulla quos perferendis quam et repudiandae architecto fugit exercitationem. Placeat quia laudantium officia veniam minus harum quaerat cum obcaecati maxime distinctio inventore excepturi quae nihil doloremque ullam quos qui explicabo, debitis culpa, autem quod. Ipsa, sunt vel a fuga perspiciatis eum recusandae, iure vero molestiae, molestias qui voluptatum culpa ut? Repudiandae autem delectus impedit maiores, iusto nisi dolores atque dolore, error odio provident perferendis eligendi esse, accusantium saepe est voluptatum at voluptatem molestiae. Ullam totam ipsa obcaecati voluptatum optio natus accusamus nisi earum id illum. Minus ad quia veritatis, eligendi assumenda, minima id beatae ut nesciunt cupiditate error. Ipsam voluptatem harum tenetur blanditiis et magnam perspiciatis molestias! Impedit, aperiam quam cupiditate consectetur voluptatum vitae nemo nobis voluptatibus quae explicabo facilis, odit quos inventore quibusdam delectus ipsam. Laborum illo accusantium nemo repellat similique quae iure perspiciatis, rem ad incidunt quas, repudiandae suscipit laudantium! Voluptatem repellat ab, quod nobis, quam fuga laudantium consequuntur iste est harum itaque. Vitae, cumque dolores voluptates est accusamus quibusdam corporis cum laudantium at!

            </p>
        </div>
    )
}
