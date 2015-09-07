'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet
} = React;

var Rating = React.createClass({

    propTypes: {
        comments_count: React.PropTypes.number.isRequired,
    },

    render: function render () {
        if (this.props.comments_count && this.props.comments_count > 0) {
            return (<Text style={styles.rating}>{this.props.comments_count + ' avis'}</Text>);
        } else {
            return (<Text style={styles.rating}>Aucun avis pour le moment</Text>);
        }
    },
});
var styles = StyleSheet.create({
    rating: {
        fontSize: 12,
        color   : '#999999'
    }
});
module.exports = Rating;
