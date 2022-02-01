import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";

class CampaignIndex extends Component {
  static async getInitalProps() {
    const campaigns = factory.methods.getDeployedCampaigns().call();
    return { campaigns };
    // console.log(campaigns)
  }

  renderCampaigns() {
    if (this.props.campaigns) {
      console.log(campaigns);
      const items = this.props.campaigns.map((address) => {
        return {
          header: address,

          description: (
            <Link route={`/campaigns/${address}`}>
              <a>View Campaign</a>
            </Link>
          ),
          fluid: true,
        };
      });

      return <Card.Group items={items} />;
    } else {
      return "no campaigns to show";
      console.log(campaigns);
    }
  }

  // renderCampaigns() {
  //   const items = this.props.campaigns.map((address) => {
  //     return {
  //       header: address,
  //       description: (
  //         <Link route={`/campaigns/${address}`}>
  //           <a>View Campaign</a>
  //         </Link>
  //       ),
  //       fluid: true,
  //     };
  //   });
  //   return <Card.Group items={items} />;
  // }

  render() {
    return (
      <Layout>
        <div>
          <h3>Open Campaigns</h3>
          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          Hello {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
