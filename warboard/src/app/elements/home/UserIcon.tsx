"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IUser } from "../../types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import UserStatsPopup from "./UserStatsPopup";
import { useEffect, useState } from "react";

export function AvatarDemo({ currentUser }: { currentUser: IUser }) {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
      setImageUrl(currentUser?.photoURL);
    }, [currentUser?.photoURL])
 
    return (
      <Popover>
        <PopoverTrigger>
          <Avatar className="h-6 w-6">
            <AvatarImage src={imageUrl} alt="userImage"/>
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent>
          <UserStatsPopup />
        </PopoverContent>
      </Popover>
    );
  }
