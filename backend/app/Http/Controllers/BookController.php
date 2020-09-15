<?php

namespace App\Http\Controllers;

use App\Book;
use Response;
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
        $book = Book::find($request->input('id'));
        $name  = $book->fileName;
        //return response()->file('storage/app/public/books/'.$name);
        $path = storage_path("app/public/books/".$name);

        return Response::make(file_get_contents($path), 200, [
            'Content-Type' => 'application/pdf',
            'Content-Disposition' => 'inline; filename="' . $name . '"'
        ]);
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        
        $book = Book::find($request->id);
        if ($request->hasFile('myFile')) {

            $path = 'public/books/'.$book->fileName;
            Storage::delete($path);
            $file = $request->file('myFile');
            $name = $file->getClientOriginalName();
            $file->storeAs('public/books/',$name);

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

        }else{

            $book->autor = $request->autor;
            $book->domain = $request->domain;
            $book->price = $request->price;
            $book->title = $request->title; 
            try {
                $book->save();
            } catch (ModelNotFoundException $exception) {
                return back()->withError($exception->getMessage())->withInput();
            }
        }

        return 'success';
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $id = $request->input('id');
        $book=Book::find($id);
        Storage::delete('public/books/'.$book->fileName);
        try {
            $book->delete();
        } catch (ModelNotFoundException $exception) {
            return back()->withError($exception->getMessage())->withInput();
        }

        return 'success';
    }

    public function getAll(){
        return Book::all();
    }
}
