package com.HackUDC.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.model.postModel;
import com.HackUDC.model.userModel;
import com.HackUDC.services.postsService;
import com.HackUDC.services.usersService;

@RestController
@RequestMapping("/api")
public class usersRestcontroller {

    @Autowired
    usersService usersService;

    @Autowired
    postsService postsService;

    @GetMapping("/users")
    public List<userModel> getUsers() {
        return usersService.getUsers();
    }
    @GetMapping("/posts")
    public List<postModel> getPosts() {
        return postsService.getPosts();
    }
}
