import { Box, Button, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductComponent = () => {
    const history = useHistory();
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) =>{ 
        const { id, image, title, price } = product;
        return(<Box key={id} p={4}>
                <Box textAlign='center'>
                    <Image
                    borderRadius='lg'
                    width={{ md: 40 }}
                    src={image}
                    alt='Woman paying for a purchase'
                    />
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    <Text
                    fontWeight='bold'
                    textTransform='uppercase'
                    fontSize='sm'
                    letterSpacing='wide'
                    color='teal.600'
                    >
                    {title}
                    </Text>
                    <Text>$ {price}</Text>
                    <Button onClick={() => history.replace(`/allProducts/singleProduct/${id}`)} colorScheme='blue'>See Detail</Button>
                </Box>
            </Box>
    )});

    return <div  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>{renderList}</div>
};

export default ProductComponent;