import React, { useState } from 'react'
import { useGetProductsQuery } from '../../../api/Api';
import {AccordionNav} from '../../components/AccordionNav';

// const Product = ({
//     product_id,
//     name,
//     price,
//     description,
//     category,
//     rating,
//     supply,
//     statproduct_id,
//     ventesannuel,
//     singleventestotal,
//     année,
//     donnermensuel,
//     donnerjournalier,
// }) => {
//     const [isExpanded, setIsExpanded] = useState(false);
// }

// return (
//     <div>
//         <p>{category}</p>
//         <h5>{name}</h5>
//         <p>{price}</p>
//         <span>{rating}</span>
//         <button
//         onClick={() => setIsExpanded(!isExpanded)}> Voir plus </button>
//     </div>
// )

// export const ProductsDash = () => {
//     const { data, isLoading } = useGetProductsQuery();
//     console.log("data", data);
//   return (
//     <div>
//         <AccordionNav />
//         <div className="contproductadmin">
//             {data || !isLoading ? (<div
//             style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(4, 1fr)",
//                 columnGap: "15px",
//             }}>

//             </div>) : (<>...Loading</>)}
//         </div>
//     </div>
//   )
// }

const Product = ({
    product_id,
    name,
    price,
    description,
    category,
    rating,
    supply,
    statproduct_id,
    ventesannuel,
    singleventestotal,
    année,
    donnermensuel,
    donnerjournalier,
    
    // ... autres props
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <p>{category}</p>
            <h5>{name}</h5>
            <p>{price}</p>
            <span>{rating}</span>
            <button onClick={() => setIsExpanded(!isExpanded)}> Voir plus </button>
            
            {/* Rendre des détails supplémentaires s'ils sont étendus */}
            {isExpanded && (
                <div>
                    {/* Ajouter des détails supplémentaires ici */}
                    {/* Par exemple : description, supply, statproduct_id, etc. */}
                </div>
            )}
        </div>
    );
};

export const ProductsDash = () => {
    const { data, isLoading } = useGetProductsQuery();
    console.log("data", data);

    return (
        <div>
            <AccordionNav />
            <div className="contproductadmin">
                {data || !isLoading ? (
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            columnGap: "15px",
                        }}
                    >
                        {data && data.map((product) => (
                            <Product key={product.product_id} {...product} />
                        ))}
                    </div>
                ) : (
                    <>...Chargement</>
                )}
            </div>
        </div>
    );
};
