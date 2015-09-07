'use strict';

var React  = require('react-native');
var Rating = require('./Rating');

var {
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
  Text
} = React;

var Card = React.createClass({

    render: function render () {
        if (this.props.card.header_image) {
            var header_image = (<Image source={{uri: this.props.card.header_image}}
                                            style={styles.card_image} />)
        }
        if (this.props.card.structure_logo_url) {
            var author_avatar = (
                <View style={styles.card_logo_image_wrapper}>
                   <Image source={{uri: this.props.card.structure_logo_url}}
                           style={styles.card_logo_image} />
                </View>);
        }
        return (<View>
                    <TouchableHighlight
                        onPress={this.props.onSelect}>
                        <View style={styles.column}>
                            {header_image}
                            {author_avatar}
                            <View style={styles.card_content_wrapper}>
                                <Text style={styles.structure_name}>{this.props.card.structure_name}</Text>
                                <Text style={styles.card_name}>{this.props.card.name}</Text>
                                <Rating comments_count={this.props.card.comments_count}/>
                            </View>
                        </View>
                    </TouchableHighlight>
                </View>);

    },
});
var styles = StyleSheet.create({
    card_image: {
        height: 200
    },
    card_content_wrapper: {
        padding: 15,
        paddingTop: 10
    },
    card_logo_image: {
        height: 50,
        width : 50,
        marginLeft: 20,
        marginTop: -25,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'white'
    },
    structure_name: {
        fontSize: 12,
        color   : '#999999'
    },
    card_name: {
        paddingTop   : 5,
        paddingBottom: 5,
        fontSize     : 20,
        fontWeight   : 'bold',
        alignItems   : 'stretch',
        flex         : 1
    },
    column: {
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column'
    }
});
module.exports = Card;
