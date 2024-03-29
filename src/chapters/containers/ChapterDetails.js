import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';

import { ChapterShape } from 'chapters/shapes';
import { getCurrentChapter } from 'chapters/selectors';
import { fetchChapterByName } from 'chapters/actions';
import { fetchAllRides } from 'rides/actions';

import Spinner from 'components/Spinner';
import ConnectedRideCard from 'rides/containers/ConnectedRideCard';

const mapStateToProps = state => ({
  chapter: getCurrentChapter(state)
});

const mapDispatchToProps = {
  fetchChapterByName,
  fetchAllRides
};

class ChapterPage extends Component {
  static propTypes = {
    chapter: ChapterShape,
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    fetchChapterByName: PropTypes.func.isRequired,
    fetchAllRides: PropTypes.func.isRequired
  };

  componentWillMount() {
    const { params } = this.props;
    this.props.fetchChapterByName(params.name);
    this.props.fetchAllRides(); // Bit of a hack to make sure we have the rides in the store
  }

  render() {
    const { chapter } = this.props;

    if (!chapter) {
      return <Spinner>loading ride details</Spinner>;
    } else {
      return (
        <DocumentTitle title={`${chapter.name} Chapter – Techbikers`}>
          <div className="content">
            <section>
              <header>
                <h1>{chapter.name} Chapter Rides</h1>
              </header>
              <div>
                <ul className="ride-list">
                  {chapter.rides.map(id => (
                    <li key={id}>
                      <ConnectedRideCard rideId={id} />
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </DocumentTitle>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);
