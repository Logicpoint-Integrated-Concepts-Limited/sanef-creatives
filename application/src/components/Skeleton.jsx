import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const PoliceListSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} baseColor="#d7d7d770" highlightColor="#ffffff50">
            <div className='w-full' >
                <div className='h-[35rem] mb-10'>
                    <Skeleton className='w-full h-full' />
                </div>
                <Skeleton className='w-full py-6' />
            </div>
        </SkeletonTheme>
    ))
};

export const TextSkeleton = ({ cards }) => {
    return Array(cards).fill(0).map((_, i) => (
        <SkeletonTheme key={i} baseColor="#2020202e" highlightColor="#dfd4d400">
            <Skeleton />
        </SkeletonTheme>
    ))
};

