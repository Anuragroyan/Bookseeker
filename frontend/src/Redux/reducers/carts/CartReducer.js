import { ADD_TO_CART,REMOVE_FROM_CART,ADJUST_QTY,LOAD_CURRENT_ITEM} from '../../actions/actionTypes';

const INITIAL_STATE = {
    products: [
        {
            id:1,
            title:'Murder on the orient express',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbtI7-DNTnjxa6kF7Cf7XTGF5nFYq3wWnbpsd_wWnXk5ULigu_ebsmrNSzPQo&usqp=CAc',
            category:'Mystery',
            description:'After a murder takes place on a train journey, a detective decides to ...',
            price:325,
        },
        {
            id:2,
            title:'Ellon Musk',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoAZVkJunRiRHS__5z2oEYY07LfTSVtdKZlqvliK8sNJN88BZh8RrBNkpBfUk&usqp=CAc',
            category:'Fictions',
            description:'How the billionaire CEO of SpaceX and Tesla is shaping our future',
            price:650,
        },
        {
            id:3,
            title:'Sapein',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFt4mXMAlGYjoM7lhy1ZZ5_ozE4o9wxIbzNLqETjKmZOhSr5gbW4gr_HSDVSVItEXB9DITxc&usqp=CAc',
            category:'Historical',
            description:'A Brief History of Time: From the Big Bang to Black Holes is a theoret..',
            price:650,
        },
        {
            id:4,
            title:'Data Structure',
            imgurl:'https://m.media-amazon.com/images/I/41y3AkLcXkL._SX260_.jpg',
            category:'Education',
            description:'Data structure and algorithmic puzzles',
            price:320,
        },
        {
            id:5,
            title:'Harry Porter',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7MckP66w_k_yJmbd4N6JjIej4LmxL52xT9UlZ4eP3Plfhil-pZeGYiSvs4WubUWN9o_gzMmB&usqp=CAc',
            category:'science',
            description:'The main story arc concerns Harrys struggle against Lord Voldemort a d...',
            price:234,
        },
        {
            id:6,
            title:'Malgudi Days',
            imgurl:'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/DVD_Cover_of_Malgudi_Days.jpeg/220px-DVD_Cover_of_Malgudi_Days.jpeg',
            category:'Story',
            description:'The people living in the small town of Malgudi lead simple lives and f..',
            price:34,
        },
        {
            id:7,
            title:'The secret life of bees',
            imgurl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1444392146l/6081433._SY475_.jpg',
            category:'Story',
            description:'The Secret Life of Bees is a fiction book by the American author Sue M...',
            price: 165,
        },
        {
            id:8,
            title:'Do it today',
            imgurl:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1529553804i/40601527._UY500_SS500_.jpg',
            category:'Fiction',
            description:'oversome procrastination improve productivity and achieve more meaning..',
            price: 421,
        },
        {
            id:9,
            title:'The Mercies',
            imgurl:'https://images-na.ssl-images-amazon.com/images/I/51sO9rHEW6L._SX327_BO1,204,203,200_.jpg',
            category:'Story',
            description:'The Mercies, is set on a remote island in Norway in the early 17th ce...',
            price:453,
        },
        {
            id:10,
            title:'Ikigai',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpCYQNQaW2NU2VCVus1AbPW1j7oICFluT5rsj5_Od7Qgs-MePvug4mu4u-h6xJQwCwqikLqEW&usqp=CAc',
            category:'Fiction',
            description:'The Japanese Secret to a Long and Happy Life',
            price:348,
        },
        {
            id:11,
            title:'Rich Dad Poor Dad',
            imgurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQddgyGdmKAssPTht-JzlVJPvrs6BTvcPVlcwn0TlQ81-BxtEHzDKoOg5ROdBomcZbvGe3rWHs&usqp=CAc',
            category:'Fiction',
            description:'What the rich teach their kids about money  that thepoor and middle cl...',
            price:459,
        },
        {
            id:12,
            title:'The white tiger',
            imgurl:'https://5.imimg.com/data5/DW/BR/MY-11183377/the-white-tiger-500x500.png',
            category:'Story',
            description:'The entrepreneur from a small village',
            price:350,
        }
    ],
    cart: [],
    currentItem: null,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        const item = state.products.find((prod) => prod.id === action.payload.id);
        const inCart = state.cart.find((item) => 
          item.id === action.payload.id ? true : false
         );
        return {
            ...state,
            cart: inCart
            ? state.cart.map((item) =>
              item.id === action.payload.id
              ? {  ...item, qty: item.qty + 1 }
              : item
           )
         :  [...state.cart, { ...item, qty: 1}],
    };  
    case REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
    case ADJUST_QTY:
        return {
            ...state,
            cart: state.cart.map((item) => 
             item.id === action.payload.id
              ? { ...item, qty: +action.payload.qty }
              : item
            ),
        };
    case LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
        };
    default:
        return state;           
  }
};

export default CartReducer;