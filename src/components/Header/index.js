import {Container} from './styles'
import {Text} from '../Text';
import {Image} from 'react-native';

export default function Header(){
    return(
    <Container>
        <Text color="#FFFFFF" size={24}>
            Organiza 
            <Text color="#FFFFFF" size={24} weight="700"> COMPRAS</Text>
        </Text>
    </Container>     
    );
}