'use client';
import { RadioInput } from '@/components/elements/input/RadioInput';
import { Movie } from '@/types/movies';
import { Styles } from '@/types/styles';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

// TODO コンポーネントをちゃんと別ファイルにする

const MovieContainer = () => {
    const [isMinimum, setIsMinimum] = useState(false);
    const [userFilter, setUseFilter] = useState(false);
    const radioButtonRef = useRef<HTMLInputElement>(null);
    const [movies, setMovies] = useState<Movie[]>([
        {
            id: 1,
            title: 'シュタゲ(未公開)',
            overview: 'HALに入るなというDメールを送れ！',
            release_date: new Date("2024-01-01"),
            backdrop_path: '',
            popularity: 0,
            poster_path: '/movie/shutage.jpg',
            video_path: 'test',
            is_adult: true,
            runtime_min: 0
        },
        {
            id: 2,
            title: 'BLACK LAGOON(公開中)',
            overview: 'シガーキスしたい',
            release_date: new Date("2021-01-01"),
            backdrop_path: '',
            popularity: 0,
            poster_path: '/movie/black-lagoon.avif',
            video_path: 'test',
            is_adult: true,
            runtime_min: 0
        },
        {
            id: 3,
            title: 'YUNO(公開中)',
            overview: '間違いなく神アニメ、異世界ループ',
            release_date: new Date("2021-01-01"),
            backdrop_path: 'test',
            popularity: 0,
            poster_path: '/movie/yuno.jpg',
            video_path: 'test',
            is_adult: true,
            runtime_min: 0
        }
    ]);
    const [filterdMovies, setFilterdMovies] = useState<Movie[]>(movies);

    useEffect(() => {
        if(userFilter){
            setFilterdMovies(movies.filter(x => x.release_date > new Date()));
        }else{            
            setFilterdMovies(movies.filter(x => x.release_date < new Date()));
        }        
    }, [userFilter]);

    return (
        <>
            <div style={userFilter ? styles.activeTitle : styles.title} onClick={() => { setUseFilter(false) }}>
                上映中作品
            </div>
            <div style={userFilter ? styles.title : styles.activeTitle} onClick={() => { setUseFilter(true) }}>
                公開予定作品
            </div>
            <RadioInput defaultChecked={true} name='movie' ref={radioButtonRef} children={undefined} onChange={(_) => { setIsMinimum(true) }}></RadioInput>
            <RadioInput name='movie' ref={radioButtonRef} children={undefined} onChange={(_) => { setIsMinimum(false) }}></RadioInput>

            {isMinimum ? filterdMovies.map(x => <MinimumMovie movie={x} />) : filterdMovies.map(x => <MovieDetail movie={x} />)}
        </>
    )
};

type MovieElementProps = {
    movie: Movie;
};

const MinimumMovie = ({ movie }: MovieElementProps) => {
    return (
        <>
            <div style={styles.minimumMovie}>
                <Image width={500} height={200} src={movie.poster_path} alt={movie.title} />
                <div>{movie.title}</div>
            </div>
        </>
    )
};

const MovieDetail = ({ movie }: MovieElementProps) => {
    return (
        <>
            <div style={styles.minimumMovie}>
                <Image width={500} height={200} src={movie.poster_path} alt={movie.title} />
                <div>{movie.title}</div>
                <div>{movie.overview}</div>
            </div>
        </>
    )
};

const styles: Styles = {
    minimumMovie: {
        backgroundColor: 'gray',
    },
    title: {
        backgroundColor: 'gray',
    },
    activeTitle: {
        backgroundColor: 'white',
    }
};

export default MovieContainer