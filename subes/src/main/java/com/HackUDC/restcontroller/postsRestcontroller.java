package com.HackUDC.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.HackUDC.model.postModel;
import com.HackUDC.services.postsService;

@RestController
public class postsRestcontroller {

    // @Autowired
    // postsService postsService;

    // @GetMapping("/posts")
    // public List<postModel> getPosts() {
    //     return postsService.getPosts();
    // }

}
