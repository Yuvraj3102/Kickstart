import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x86ADE6d3E89e8A8cd3383A43c8d2B906ad5C058a'
);

export default instance;
