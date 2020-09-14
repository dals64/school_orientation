<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $name = "";
        if ($request->hasFile('myFile')) {
            $file = $request->file('myFile');
            $path = 'public/books';
            $name = $file->getClientOriginalName();
            $file->storeAs($path,$name);  // ou move(path,name)
        }else{
            return 'aucun fichier entrer';
        }
        
        $book = new Book();
        $book->autor = $request->autor;
        $book->domain = $request->domain;
        $book->price = $request->price;
        $book->title = $request->title;
        $book->fileName = $name;

        try {
            $book->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }        

        return 'success';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $book = Book::where('id',$request->id);
        if ($request->hasFile('myFile')) {
            $path = 'public/books';
            Storage::delete($path.'/'.$book->fileName);
            $file = $request->file('myFile');
            $name = $file->getClientOriginalName();
            $file->storeAs($path,$name);

            $book->autor = $request->autor;
            $book->domain = $request->domain;
            $book->price = $request->price;
            $book->title = $request->title;
            $book->fileName = $name;
        }else{
            $book->autor = $request->autor;
            $book->domain = $request->domain;
            $book->price = $request->price;
            $book->title = $request->title;            
        }
        
        try {
            $book->save();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }  

        return 'success';
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }

    public function getAll(){
        return Book::all();
    }
}
