import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.header}>
                    Total de <Text style={styles.headerTextBold}>0 casos.</Text>
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            <View style={style.IncidentList}>
                <View style={style.Incident}>
                    <Text style={style.IncidentProperty}>ONG:</Text>
                    <Text style={style.IncidentValue}>APAD</Text>

                    <Text style={style.IncidentProperty}>CASO:</Text>
                    <Text style={style.IncidentValue}>Cachorro com problema de saúde</Text>

                    <Text style={style.IncidentProperty}>VALOR:</Text>
                    <Text style={style.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => {}}    
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
                
                <View style={style.Incident}>
                    <Text style={style.IncidentProperty}>ONG:</Text>
                    <Text style={style.IncidentValue}>APAD</Text>

                    <Text style={style.IncidentProperty}>CASO:</Text>
                    <Text style={style.IncidentValue}>Cachorro com problema de saúde</Text>

                    <Text style={style.IncidentProperty}>VALOR:</Text>
                    <Text style={style.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => {}}    
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>

                <View style={style.Incident}>
                    <Text style={style.IncidentProperty}>ONG:</Text>
                    <Text style={style.IncidentValue}>APAD</Text>

                    <Text style={style.IncidentProperty}>CASO:</Text>
                    <Text style={style.IncidentValue}>Cachorro com problema de saúde</Text>

                    <Text style={style.IncidentProperty}>VALOR:</Text>
                    <Text style={style.IncidentValue}>R$ 120,00</Text>

                    <TouchableOpacity 
                        style={styles.detailsButton}
                        onPress={() => {}}    
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right" size={16} color="#E02041" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
