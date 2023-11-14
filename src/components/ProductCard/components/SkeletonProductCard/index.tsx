import { SkeletonProductCardPhoto, SkeletonProductCardRoot, SkeletonProductCardText } from "./styles";

export function SkeletonProductCard(){
    return(
        <SkeletonProductCardRoot>
            <SkeletonProductCardPhoto />
            <SkeletonProductCardText />
            <SkeletonProductCardText />
            <SkeletonProductCardText />
        </SkeletonProductCardRoot>    
    )
}