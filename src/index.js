import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const CartDisplay = props => (
    <>
        <h1>Basket</h1>
    <div >
        {props.carT}
    </div>

        <div>
            <button >
                <span >CHECKOUT</span>
            </button>
        </div>
    </>
)

const PizzaMenu = props => (
    <>
        <img src={props.pizzaImages} width={'200'} height={'200'} alt={props.pizzaName}></img>
        <div className={'columns'}>
            {props.pizzaName}
        <div >
            <h5>Select Base</h5>
            {props.baseName.map((baseName,i) =>
                <button key={i} onClick={() => props.setBase(baseName)}
                        style={{backgroundColor: props.status(baseName)}}
                >{baseName}</button>
            )}
        </div>
        <div>
            <h5>Select Size</h5>
            {props.sizeName.map((sizeName,i) =>
                <button key={i} onClick={() => props.setSize(sizeName)}
                style={{backgroundColor: props.status(sizeName)}}
                >{sizeName}</button>
            )}
        </div>
        <article>
            <button onClick={() => props.handleOrder(props.pizzaName)}
            //style={{backgroundColor: 'lightgray'}}
            >Add to basket</button>
        </article>
        </div>
    </>
)

const DrinksAndSidesMenu = props => (
    <>
        <div>
            {props.itemName}
        </div>
        <div >
            <button onClick={() => props.handleClick(props.itemName)}>Add to basket</button>
        </div>

    </>
)

const FiftyMenu = props => (
    <>
        <h4>First Half</h4>
        <div >

            {props.pizzaName.map((pizzaName,i) =>
                <button key={i} onClick={() => props.setFirstPizza(pizzaName)}
                        style={{backgroundColor: props.status(pizzaName)}}
                >{pizzaName}</button>
            )}
        </div>
        <h4>Second Half</h4>
        <div >

            {props.pizzaName.map((pizzaName,i) =>
                <button key={i} onClick={() => props.setSecondPizza(pizzaName)}
                        style={{backgroundColor: props.status(pizzaName)}}
                >{pizzaName}</button>
            )}
        </div>
        <div>
            <h5>Select Base</h5>
            {props.baseName.map((baseName,i) =>
                <button key={i} onClick={() => props.setBase(baseName)}
                        style={{backgroundColor: props.status(baseName)}}
                >{baseName}</button>
            )}
        </div>
        <div>
            <h5>Select Size</h5>
            {props.sizeName.map((sizeName,i) =>
                <button key={i} onClick={() => props.setSize(sizeName)}
                        style={{backgroundColor: props.status(sizeName)}}
                >{sizeName}</button>
            )}
        </div>

        <article >
            <button onClick={() => props.handleOrder([props.firstPizza, props.secondPizza])}
                //style={{backgroundColor: 'lightgray'}}
            >Add to basket</button>
        </article>

    </>
)

const PizzaShop = () => {
    const [base, setBase] = useState('')
    const [size, setSize] = useState('')
    const [cart, setCart] = useState('')
    const [firstHalf, setFirstHalf] = useState('')
    const [secondHalf, setSecondHalf] = useState('')
    const pizzaNames = ['Meat Feast','BBQ Chicken','Calzone','Contadina','Diavola','Vegetarian','Capricciosa','Mafiosa',
        'Tonno','Pepperoni','Four Seasons','Tropicale','Siciliana','Margherita','Buffalo Mozarella Margherita'];
    const drinksNames = ['Pepsi','Pepsi Max','Dr Pepper','7-up','Tango'];
    const sidesNames  = ['Garlic Bread','Cheesy Garlic Bread','Coleslaw','Chicken Wings'];
    const baseNames = ['Thin Italian','Stone Crust','Cheese Stuffed Crust','Vegan','Gluten Free'];
    const sizeNames = ['Small-8"','Medium-12"','Large-16"','Pizzanormous-20"']
    const images = ['https://c8.alamy.com/comp/KP79Y5/meat-feast-pizza-KP79Y5.jpg',
    'https://images.ichkoche.at/data/image/variations/620x434/11/chicken-bbq-pizza-img-106064.jpg',
        'https://www.daskochrezept.de/sites/daskochrezept.de/files/styles/full_width_tablet_4_3/public/stockfood/stockfood-11344993.jpg?h=21b19115&itok=OPlEUG5v',
        'https://carusopizza.cz/639/16.jpg',
        'https://speisekarte.menu/storage/media/dishes_main/1300217/depositphotos-15420707-m-1531911089.jpg',
        'https://www.nibble.ie/uploads/1/3/8/3/138326475/s672279230463756966_p169_i3_w1200.jpeg',
        'https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-capricciosa.jpg',
        'https://media-cdn.tripadvisor.com/media/photo-s/07/7d/35/ee/mafiosa.jpg',
        'https://rezept-db.womenshealth.de/image/rezept-db/fullWidth/Pizza-Tonno-Belag.jpg.webp',
        'https://dierezepte.com/wp-content/uploads/2019/08/pepperoni-pizza.jpg',
        'http://cdn.shopify.com/s/files/1/1718/7795/articles/Four_Seasons.jpg?v=1615284917',
        'https://smilerestaurant.net/wp-content/uploads/2021/04/Pizza-Tropicale-Copy.jpg',
        'https://pizzacall.at/163-large_default/siciliana.jpg',
        'https://cdn.shopify.com/s/files/1/0410/4598/3397/articles/Margherita-9920.jpg?crop=center&height=800&v=1644589966&width=800',
        'https://www.italianfoodforever.com/wp-content/uploads/2015/11/buratapizza.jpg'
    ]

    const addPizzaToCart = props => {
        if (base && size) {
                setCart(cart + ' Pizza: ' + props + ' Base: ' + base + ' Size: ' + size)
                setBase('')
                setSize('')
        }
    }
    const addFiftyToCart = props => {
        if (firstHalf && secondHalf && base && size){
            setCart(cart+'50/50: First Half: '+props[0]+ ' Second Half: ' +props[1]+ ' Base: '+base+ ' Size: ' + size)
            setFirstHalf('')
            setSecondHalf('')
            setBase('')
            setSize('')
        }
    }

    const addDrinksAndSidesToCart = props =>
        setCart(cart + ' ' + props)

    const baseSetter = props =>
        setBase(props)

    const sizeSetter = props =>
      setSize(props)

    const firstHalfSetter = props =>
        setFirstHalf(props)

    const secondHalfSetter = props =>
        setSecondHalf(props)

    const buttonStatus = props =>{
        if (size === props || base === props || firstHalf === props){
            return 'lightgreen';
        } else if (secondHalf === props){
            return 'lightblue';
        }
        //setFifty('50/50')
    }

    return (
        <>
            <header><h1>Peter's Pizza</h1></header>
            <main>
                <article >
                    <h1>Pizzas</h1>
                    {pizzaNames.map((pizzaName, i) =>
                       <div className="columns-desktop">
                            <PizzaMenu pizzaName={pizzaName}
                                          key={i}
                                          status={buttonStatus}
                                          baseName={baseNames}
                                          sizeName={sizeNames}
                                          pizzaImages={images[i]}
                                          handleOrder={addPizzaToCart}
                                          setSize={sizeSetter}
                                          setBase={baseSetter}
                            />
                    </div>
                    )}
                    </article>
                    <article>
                        <h1>50/50</h1>
                        <div className="card text-white pizza-card">
                            <FiftyMenu

                                firstPizza={firstHalf}
                                secondPizza={secondHalf}
                                sizeName={sizeNames}
                                baseName={baseNames}
                                status={buttonStatus}
                                handleOrder={addFiftyToCart}
                                setFirstPizza={firstHalfSetter}
                                setSize={sizeSetter}
                                setBase={baseSetter}
                                setSecondPizza={secondHalfSetter}
                                pizzaName={pizzaNames}>
                            </FiftyMenu>
                        </div>
                    </article>
                <article className="Drinks">
                    <div>
                        <h1>Drinks</h1>
                        {drinksNames.map((drinkName,i) =>
                            <div>
                            <DrinksAndSidesMenu itemName={drinkName}
                                                key={i}
                                                handleClick={addDrinksAndSidesToCart} /></div>)}
                    </div>
                </article>
                <article className="Sides">
                    <div >
                        <h1>Sides</h1>
                        {sidesNames.map((sideName,i) =>
                            <div >
                            <DrinksAndSidesMenu itemName={sideName}
                            key={i} handleClick={addDrinksAndSidesToCart} /></div>
                        )}
                    </div>
                </article>
                <article>
                      <CartDisplay carT={cart}></CartDisplay>
                </article>
            </main>
        </>
    );
};
// ========================================


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PizzaShop />);
