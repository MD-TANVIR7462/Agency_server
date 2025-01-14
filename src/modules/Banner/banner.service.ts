import { TBanner } from "./banner.interface";
import { BannerModel } from "./banner.model";

const createBanner = async (data :TBanner)=>{
    const result = await BannerModel.create(data)
    return result

}
export const BannerServices ={
    createBanner
}