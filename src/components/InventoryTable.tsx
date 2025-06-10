"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Combobox } from "./ui/combo-box";
import React from "react";
import { useState } from "react";

const plants = [
  {
    id: "INV001",
    name: "plant1",
    category: "Electronics",
    price: 2,
    stock: 500
  }
];

export default function InventoryTable() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <div className="w-full">
        <div className="flex items-center gap-2 py-4">
            <div className="relative max-w--sm w-full">
                 <Input
                placeholder="Filter plants..."
                className="pl-10"
            />
                <Search className="absolute h-4 w-4 left-3 top-1/2 transform -translate-y-1/2" />
            </div>
            <Combobox value={selectedCategory} onChange={(val) => setSelectedCategory(val)}/>
        </div>
            <Table>
                <TableCaption>A list of your recent inventory.</TableCaption>
                <TableHeader>
                    <TableRow>

                      <TableHead>Plant ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Stock</TableHead>
                      <TableHead className="text-right">Actions</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {plants.map((plant) => (
                    <TableRow key={plant.id}>
                        <TableCell>{plant.id}</TableCell>
                        <TableCell>{plant.name}</TableCell>
                        <TableCell>{plant.category}</TableCell>
                        <TableCell>{plant.price}</TableCell>
                        <TableCell className="font-bold">{plant.stock}</TableCell>
                        <TableCell className="text-right">
                            <div className="flex justify-end space-x-4">
                                <h1>Edit button</h1>
                                <h1>Delete Button</h1>
                            </div>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
    </div>

   
  );
}
